function showContent(){
    const container = document.getElementsByClassName('container');

    if(container.style.display === "none"){
        document.getElementsByClassName('showcase').style.display = 'none';
        container.style.display = 'flex'
    }

}