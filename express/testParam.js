// document.getElementById("message").innerText ="he";

function foo() {
    console.log('start foo');
    setTimeout(() => {
        console.log("foo..");
    });
    console.log('end foo');
}

function bar() {
    new Promise((resolve) => {
        console.log('start promise');
        setTimeout(async () => {
            console.log("promising...");
            // return  'success';
            resolve('successed...');
        });
        console.log('end promise');

    }).then((successMessage) => {
            console.log('then:'+successMessage);
        }
    );
    console.log('start bar');
    setTimeout(() => {
        console.log("bar..");
    },10000);
    console.log('end bar');
}

function lee() {
    console.log('start lee');
    setTimeout(() => {
        console.log("lee..");
    });
    console.log('end lee');
}

(() => {
    // foo();
    bar();
    lee();
})();