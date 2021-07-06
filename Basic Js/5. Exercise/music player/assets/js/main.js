/**
 * 1. Render songs.
 * 2. document.documentElement.scrollTop -> get all elements of html.scrollTop || window.scrollY.
 * 3. Play/Pause/Seek.
 * 4. CD Rotate. 
 * 5. Next/previous song
 * 6. Random
 * 7. Next/repeat when the song ended
 * 8. Active song
 * 9. Sroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const player = $('.player')
const heading = $('header h2')
const cd = $('.cd')
const cdThumb = $('.cd-thumb')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const audio = $('#audio')


const app = {
    currentIndex: 0,
    isPlaying: false,
    songs: [
        {
            name: 'Nevada',
            singer: 'Vicetone',
            path: './assets/music/Nevada-Vicetone.mp3',
            image: './assets/img/Nevada-Vicetone.jpg'
        },
        {
            name: 'Light It Up',
            singer: 'RobinHustin x Tobimorrow',
            path: './assets/music/LightItUp-RobinHustinTobimo.mp3',
            image: './assets/img/LightItUp-RobinHustinTobimorrow.jpg'
        },
        {
            name: 'Muộn Rồi Mà Sao Còn',
            singer: 'Son Tung MTP',
            path: './assets/music/MuonRoiMaSaoCon-SonTungMTP.mp3',
            image: './assets/img/MuonRoiMaSaoCon-SonTungMTP.jpg'
        },
        {
            name: 'Alone',
            singer: 'Marshmello',
            path: './assets/music/Alone-Marshmello.mp3',
            image: './assets/img/Alone-Marshmello.jpg'
        },
        {
            name: 'See You Again',
            singer: 'CharliePuth ft WizKhalifa',
            path: './assets/music/SeeYouAgain-CharliePuthftWizKhalifa.mp3',
            image: './assets/img/SeeYouAgain-CharliePuthftWizKhalifa.jpg'
        },
        {
            name: 'Shape Of You',
            singer: 'Ed Sheeran',
            path: './assets/music/ShapeOfYou-Ed Sheeran.mp3',
            image: './assets/img/ShapeOfYou-Ed Sheeran.jpg'
        },
        {
            name: 'Something Just Like This',
            singer: 'The Chain smokers Coldplay',
            path: './assets/music/SomethingJustLikeThis-TheChainsmokersColdplay.mp3',
            image: './assets/img/SomethingJustLikeThis-TheChainsmokersColdplay.jpg'
        },
        {
            name: 'Sugar',
            singer: 'Maroon5',
            path: './assets/music/Sugar-Maroon5.mp3',
            image: './assets/img/Sugar-Maroon5.jpg'
        },
        {
            name: 'Symphony',
            singer: 'Clean Bandit Zara Larsson',
            path: './assets/music/Symphony-CleanBanditZaraLarsson.mp3',
            image: './assets/img/Symphony-CleanBanditZaraLarsson.jpg'
        },
        {
            name: 'Waiting For Love',
            singer: 'Avicii',
            path: './assets/music/WaitingForLove-Avicii.mp3',
            image: './assets/img/WaitingForLove-Avicii.jpg'
        },
        {
            name: 'YoruNiKakeru',
            singer: 'YOASOBI',
            path: './assets/music/YoruNiKakeru-YOASOBI.mp3',
            image: './assets/img/YoruNiKakeru-YOASOBI.png'
        },
    ],
    render: function() {
        const htmls = this.songs.map(song => {
            return `
                <div class="song">
                    <img class="thumb" src="${song.image}"/>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('')
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        _app = this

        // --------------handle zoom in/out cd------------------
        // cd.offsetWidth = 200px for the first time
        const cdWidth = cd.offsetWidth
        document.onscroll = function() {
            const scrollTop = document.documentElement.scrollTop || window.scrollY

            const newCdWidth = cdWidth - scrollTop
            // console.log(cd.offsetWidth)

            // width can not be nagative
            cd.style.width = newCdWidth >= 0 ?  newCdWidth + 'px' : 0
            cd.style.height = cd.style.width
            
            //opacity can be nagative
            cd.style.opacity = newCdWidth / cdWidth
        }

        // --------------handle play/pause audio------------------
        playBtn.onclick = function() {
            if(_app.isPlaying) 
                audio.pause();
            else
                audio.play();
        }

        audio.onplay = function() {
            player.classList.add('playing')
            _app.isPlaying = true
        }

        audio.onpause = function() {
            player.classList.remove('playing')
            _app.isPlaying = false
        }

        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = audio.currentTime / audio.duration * 100
                progress.value = progressPercent
            }
        }

        // --------------handle seek audio------------------

        // mobile
        progress.ontouchstart = function() {
            audio.ontimeupdate = function(){}
        }

        progress.ontouchend = function(e) {
            const seekTime = e.target.value * audio.duration / 100
            audio.currentTime = seekTime
            audio.ontimeupdate = function() {
                if(audio.duration) {
                    const progressPercent = audio.currentTime / audio.duration * 100
                    progress.value = progressPercent
                }
            }
        }
        // pc
        progress.onmousedown = function() {
            audio.ontimeupdate = function(){}
        }

        progress.onmouseup = function(e) {
            const seekTime = e.target.value * audio.duration / 100
            audio.currentTime = seekTime
            audio.ontimeupdate = function() {
                if(audio.duration) {
                    const progressPercent = audio.currentTime / audio.duration * 100
                    progress.value = progressPercent
                }
            }
        }

        
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.src = this.currentSong.image
        audio.src = this.currentSong.path
    },

    start: function() { 
        // define properties for object (app)
        this.defineProperties();

        // listen, handle events (DOM events)
        this.handleEvents();

        // load current song to UI
        this.loadCurrentSong();

        // render playlist
        this.render();
    }
}


app.start()
