 function insert( num ) {
        document.form.textview.value = document.form.textview.value + num;
    }

function equal() {
        let exm = document.form.textview.value;

        if (exm) {
            document.form.textview.value = eval(exm);
        }
    }

function cl() {
    document.form.textview.value = "";
}