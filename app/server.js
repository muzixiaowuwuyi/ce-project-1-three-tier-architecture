const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 提供静态 HTML 页面
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 健康检查接口（下午配置 ALB 时非常关键）
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});