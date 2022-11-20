# Oitapi

大分県立校のブログ記事を REST API として表示可能にしました

**サーバーを構築する**

```sh
deno run -A server.js
```

# リクエスト例

-   `/oitahoufutyu`でのリクエスト

```json
[
    {
        "timestamp": "xxxx年xx月xx日",
        "title": "xxx",
        "path": "information/2-40.html",
        "category": "schoolguide"
    },
    {
        "timestamp": "xxxx年xx月xx日",
        "title": "xxx",
        "path": "information/iris2022-3.html",
        "category": "schoolguide"
    },
    {
        "timestamp": "xxxx年xx月xx日",
        "title": "xxx",
        "path": "information/iris2022-2.html",
        "category": "schoolguide"
    }
    ...
]
```

-   `/oitahoufutyu/information/2-40.html`でのリクエスト

```html
<some-html>記事内容</some-html>
```
