var likeIcons = document.querySelectorAll('.bi.bi-heart');

likeIcons.forEach(function(likeIcon) {
    var postId = likeIcon.id;
    var liked =localStorage.getItem(postId);

    if(liked === 'true') {
        likeIcon.classList.add('bi-heart-half');
        likeIcon.classList.remove('bi-heart')
    }

    likeIcon.addEventListener('click', function() {
        this.classList.toggle('bi-heart');
        this.classList.toggle('bi-heart-half');

        if(this.classList.containers('bi-heart-half')){
            localStorage.setItem(postId,'true');
        } else {
            localStorage.setItem(postId,'false');
        }
    });
        
});

