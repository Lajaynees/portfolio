const nav_links = document.getElementsByClassName('nav_link');
const homePage = document.getElementById('homePage');
const aboutPage = document.getElementById('aboutPage');
const contactPage = document.getElementById('contactPage');
const projectsPage = document.getElementById('projectsPage');


for (let link of nav_links) {
    link.onclick = handleLink;
}

function handleLink() {
    const page = this.getAttribute('data-page')
    switch (page) {
        case 'homePage':
            homePage.scrollView()
            break;
        case 'aboutPage':
            aboutPage.scrollView()
            break;
        case 'contactPage':
            contactPage.scrollView()
            break;
        case 'projectsPage':
            projectsPage.scrollView()
            break;
        default:
            break;
    }
}