// change copy logic function
const changeContent = (param) => {
    
    const contents = [
        {
            image: 'Image 1',
            copy: 'This ic copy for Image 1. Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.'
        },
        {
            image: 'Image 2',
            copy: 'This is copy for Image 2. Jest dostępnych wiele różnych wersji Lorem Ipsum, ale większość zmieniła się pod wpływem dodanego humoru czy przypadkowych słów'
        },
        {
            image: 'Image 3',
            copy: 'This is copy for Image 3. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'
        }
    ]
    
    
    const contentContainer = document.querySelector('.content_container')
    const photo = document.querySelector('.image_container')
    const copy = document.querySelector('.copy_container')

    contentContainer.style.animation = 'fadeOutAndIn 0.5s ease-in-out both'

    // console.log(contentContainer)

    setTimeout(() => {
        // change copy
        photo.textContent = contents[param].image
        copy.textContent = contents[param].copy

        setTimeout(() => {
            // console.log('now')
            contentContainer.style.animation = '';
        }, 250)
    }, 250) 
}