async function userAction() {
    await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
}
userAction();