const babel = require('@babel/core');

// CLIを利用しない場合
babel.transform(
    `
    const a = () => {}
    `, 
    {},
    function (err, result) {
        console.log('generated code: ', result.code);
    }
)