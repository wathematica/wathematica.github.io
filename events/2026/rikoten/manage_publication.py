#!/usr/bin/env python3
"""Toggle both poster assets and UI without exposing unpublished PDFs."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
PRIVATE = ROOT / '_private'
DATA = ROOT / 'data.js'
PREFIX = '// 開催情報・ポスター・スライド写真の編集はこのファイルで行います。パスはrikoten.htmlからの相対パスです。\nwindow.rikotenData = '


def read_data():
    return json.loads(DATA.read_text().split('window.rikotenData = ', 1)[1].rstrip(';\n'))


def set_public(data, public):
    data['publication'] = {'postersPublic': public}
    temporary = DATA.with_suffix('.js.tmp')
    temporary.write_text(PREFIX + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
    temporary.replace(DATA)


def asset_files(base):
    files = list((base / 'poster').glob('*.pdf'))
    for directory in ['assets/posters', 'assets/pdfs']:
        files.extend(p for p in (base / directory).rglob('*') if p.is_file() and p.name != '.DS_Store')
    return files


def same_file(a, b):
    return hashlib.sha256(a.read_bytes()).digest() == hashlib.sha256(b.read_bytes()).digest()


def main():
    parser = argparse.ArgumentParser(description='ポスターの公開・非公開を切り替えます。')
    parser.add_argument('mode', choices=['publish', 'unpublish', 'status'])
    mode = parser.parse_args().mode
    data = read_data()
    if mode == 'status':
        print('公開中' if data.get('publication', {}).get('postersPublic') else '非公開（タイトル・概要のみ）')
        print(f'公開対象の素材: {len(asset_files(ROOT))}件 / 非公開保管: {len(asset_files(PRIVATE))}件')
        return
    if mode == 'unpublish':
        files = asset_files(ROOT)
        # A conflicting private copy must never overwrite the user's work.
        for source in files:
            destination = PRIVATE / source.relative_to(ROOT)
            if destination.exists() and not same_file(source, destination):
                raise SystemExit(f'保管ファイルと内容が異なります。先に確認してください: {destination}')
        set_public(data, False)
        for source in files:
            destination = PRIVATE / source.relative_to(ROOT)
            destination.parent.mkdir(parents=True, exist_ok=True)
            # Replace only a verified identical copy; moving preserves the source content.
            shutil.move(str(source), str(destination))
        print('非公開にしました。PDF・ポスター画像は _private/ に保管し、一覧はタイトル・概要のみ表示します。')
    else:
        files = asset_files(PRIVATE)
        for source in files:
            destination = ROOT / source.relative_to(PRIVATE)
            if destination.exists() and not same_file(source, destination):
                raise SystemExit(f'公開先と保管ファイルの内容が異なります: {destination}')
        # Check every registered poster path before enabling the public UI.
        for poster in data['posters']:
            for part in poster.get('parts', [poster]):
                for field in ['image', 'pdf']:
                    relative = part[field].split('#')[0].removeprefix('./')
                    if not (PRIVATE / relative).is_file() and not (ROOT / relative).is_file():
                        raise SystemExit(f'公開に必要なファイルがありません: {relative}')
        for source in files:
            destination = ROOT / source.relative_to(PRIVATE)
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, destination)
        set_public(data, True)
        print('公開しました。画像・PDFプレビュー・ダウンロードが有効です。')
    print('公開サイトへの反映には通常どおり変更をコミット・デプロイしてください。')


if __name__ == '__main__':
    main()
