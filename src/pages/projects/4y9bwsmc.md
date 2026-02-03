---
title: "レジュメ管理アプリ"
layout: "@layouts/MdLayout.astro"
description: "レジュメをアップロードし、閲覧できるアプリ"
---

## About

レジュメ・デモ動画をアップロードし、それを一気に見れるサイト。簡単な認証付き。

## Stack

#rails

## Assignment

- レジュメをDiscordやGoogle Driveで共有
  - 毎回ダウンロード、クリックが面倒

## Solution

1. レジュメをアップロードし、それをダウンロードなしで閲覧できるシステム
2. デモ動画も共有していたので、それも同様に処理できるように構築（S3、ローカル）

## How to

レジュメについては、PDFなのでPDF ViewerをRailsのHotwireを使って実装。保存先ストレージとしてBackblazeを使っていたがあっという間に制限が来たので、アプリケーションのストレージに直で保存する方法に変更。
