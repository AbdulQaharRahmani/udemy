head = null;

function insertLast(value) {
    if (!head) {
        head = {
            value,
            next: null
        }
    } else {
        let temp = head;
        while (temp.next)
            temp = temp.next;

        temp.next = {
            value,
            next: null
        }
    }
}

function display(){
    temp = head;
    while(temp){
        console.log(temp.value);
        temp = temp.next;
    }
}

for(let i =0;i<10;i++){
    insertLast(i*10);
}
display();