// index.js
import Koa from 'koa';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const { renderToString } = ReactDOMServer;

const app = new Koa();

app.use(ctx => {
    ctx.body = renderToString(
        <div>
            <h1>Hello，World</h1>
        </div>
    );
});

app.listen(3000, () => {
    console.log('server run in 3000');
});