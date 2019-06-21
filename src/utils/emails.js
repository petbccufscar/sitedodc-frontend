class EmailsImage {
    static getEmailImagePath(email) {
        let index = email.indexOf("@");
        let nome = email.slice(0,index);
        return "/emails/" + nome + ".png";
    }
}

export default EmailsImage;