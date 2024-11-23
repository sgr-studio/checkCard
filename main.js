if (localStorage.getItem("psd") == null && localStorage.getItem("actid") == null) {
    let signupDiv = document.createElement("div");
    signupDiv.innerHTML = '<h3>登録</h3><input type="text" id="actid" autocomplete="off" autocapitalize="off" placeholder="ユーザーIDを入力" spellcheck="false" value=""><input type="text" id="psd" autocomplete="off" autocapitalize="off" placeholder="パスワードを入力" spellcheck="false" value=""><button onclick="signup()">サイトに登録する</button>';
    document.getElementById("signup").appendChild(signupDiv);
    document.getElementById("pass").remove();
} else if (localStorage.getItem("autologin")) {
    document.getElementById("pass").remove();
    document.getElementById("signup").remove();

    screen();
} else {
    let signinDiv = document.createElement("div");
    signinDiv.innerHTML = '<h3>パスワード</h3><input type="text" id="accountid" autocomplete="off" autocapitalize="off" placeholder="ユーザーIDを入力" spellcheck="false" value=""><input type="password" id="password" autocomplete="off" autocapitalize="off" placeholder="パスワードを入力" spellcheck="false" value=""><button onclick="signin()">サイトにログインする</button>';
    document.getElementById("pass").appendChild(signinDiv);
    document.getElementById("signup").remove();
}

function signup() {
    let actid = document.getElementById("actid");
    let psd = document.getElementById("psd");
    localStorage.setItem("psd",psd.value);
    localStorage.setItem("actid",actid.value);
    localStorage.setItem("autologin",true);
    window.location.reload();
}

function screen() {
    let screenHeaderDiv = document.createElement("header");
    screenHeaderDiv.setAttribute("class","h")
    screenHeaderDiv.innerHTML = '<h2>IDカード</h2> <input type="button" id="logout" onclick="logout()" value="ログアウト">';
    document.getElementById("screen").appendChild(screenHeaderDiv);
    let screenCardDiv = document.createElement("div");
    screenCardDiv.setAttribute("class","card")
    screenCardDiv.innerHTML = '<h1>'+ localStorage.getItem("actid") +'様</h1>';
    document.getElementById("screen").appendChild(screenCardDiv);
}

function signin() {
    if(localStorage.getItem("actid") == document.getElementById("accountid").value && localStorage.getItem("psd") == document.getElementById("password").value) {
        document.getElementById("pass").remove();
        screen();
        localStorage.setItem("autologin",true);
    } else {
        document.querySelector("#pass div h3").textContent = "› 間違いです"
    }
}

function logout() {
    let ans = confirm("本当にログアウトしますか？");
    if(ans) {
        localStorage.removeItem("autologin");
        // alert("ログアウトをしました");
        window.location.reload();
    }
    // alert("ログアウトをキャンセルしました");
}