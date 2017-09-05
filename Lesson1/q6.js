window.onload = function () {
    String.prototype.filter = function (bannedWords){
        let str = this.toString();
        for(word of bannedWords){
            str = str.replace(word, '***');
        }
        return str;
    }
    console.log("This House is nice!".filter(["House", "nice"]));
}