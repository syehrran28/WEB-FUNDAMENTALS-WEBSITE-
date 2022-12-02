

document.addEventListener("DOMContentLoaded", () => {
    const login_form = document.querySelector("#login");
    const signup_form = document.querySelector("#signup");

    document.querySelector("#login_account").addEventListener("click", e => {
        e.preventDefault();
        login_form.classList.remove("form_hidden");
        signup_form.classList.add("form_hidden");
    });
    
    document.querySelector("#sign_up_account").addEventListener("click", e => {
        e.preventDefault();
        signup_form.classList.remove("form_hidden");
        login_form.classList.add("form_hidden");
        
    });
});