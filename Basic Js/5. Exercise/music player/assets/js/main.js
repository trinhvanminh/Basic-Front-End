/**
 * 1. Render songs.
 * 2. document.documentElement.scrollTop -> get all elements of html.scrollTop || window.scrollY.
 * 3. Play/Pause/Seek.
 * 4. CD Rotate.
 * 5. Next/previous song
 * 6. Random
 * 7. Next/repeat when the song ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = "MINH_PLAYER";

const player = $(".player");
const heading = $("header h2");
const cd = $(".cd");
const cdThumb = $(".cd-thumb");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const audio = $("#audio");
const repeatBtn = $(".btn-repeat");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const playlist = $(".playlist");

const app = {
	currentIndex: 0,
	isPlaying: false,
	isRepeat: false,
	isRandom: false,
	config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
	songs: [
		{
			name: "Nevada",
			singer: "Vicetone",
			path: "./assets/music/Nevada-Vicetone.mp3",
			image: "./assets/img/Nevada-Vicetone.jpg",
		},
		{
			name: "Light It Up",
			singer: "RobinHustin x Tobimorrow",
			path: "./assets/music/LightItUp-RobinHustinTobimorrow.mp3",
			image: "./assets/img/LightItUp-RobinHustinTobimorrow.jpg",
		},
		{
			name: "Muộn Rồi Mà Sao Còn",
			singer: "Son Tung MTP",
			path: "./assets/music/MuonRoiMaSaoCon-SonTungMTP.mp3",
			image: "./assets/img/MuonRoiMaSaoCon-SonTungMTP.jpg",
		},
		{
			name: "Alone",
			singer: "Marshmello",
			path: "./assets/music/Alone-Marshmello.mp3",
			image: "./assets/img/Alone-Marshmello.jpg",
		},
		{
			name: "See You Again",
			singer: "CharliePuth ft WizKhalifa",
			path: "./assets/music/SeeYouAgain-CharliePuthftWizKhalifa.mp3",
			image: "./assets/img/SeeYouAgain-CharliePuthftWizKhalifa.jpg",
		},
		{
			name: "Shape Of You",
			singer: "Ed Sheeran",
			path: "./assets/music/ShapeOfYou-Ed Sheeran.mp3",
			image: "./assets/img/ShapeOfYou-Ed Sheeran.jpg",
		},
		{
			name: "Something Just Like This",
			singer: "The Chain smokers Coldplay",
			path: "./assets/music/SomethingJustLikeThis-TheChainsmokersColdplay.mp3",
			image: "./assets/img/SomethingJustLikeThis-TheChainsmokersColdplay.jpg",
		},
		{
			name: "Sugar",
			singer: "Maroon5",
			path: "./assets/music/Sugar-Maroon5.mp3",
			image: "./assets/img/Sugar-Maroon5.jpg",
		},
		{
			name: "Symphony",
			singer: "Clean Bandit Zara Larsson",
			path: "./assets/music/Symphony-CleanBanditZaraLarsson.mp3",
			image: "./assets/img/Symphony-CleanBanditZaraLarsson.jpg",
		},
		{
			name: "Waiting For Love",
			singer: "Avicii",
			path: "./assets/music/WaitingForLove-Avicii.mp3",
			image: "./assets/img/WaitingForLove-Avicii.jpg",
		},
		{
			name: "YoruNiKakeru",
			singer: "YOASOBI",
			path: "./assets/music/YoruNiKakeru-YOASOBI.mp3",
			image: "./assets/img/YoruNiKakeru-YOASOBI.png",
		},
	],
	setConfig: function (key, value) {
		this.config[key] = value;
		localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
	},
	render: function () {
		const htmls = this.songs.map((song, index) => {
			return `
                <div class="song" data-index="${index}">
                    <img class="thumb" src="${song.image}"/>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `;
		});
		playlist.innerHTML = htmls.join("");
		playlist.children[0].classList.add("active");
	},
	defineProperties: function () {
		Object.defineProperty(this, "currentSong", {
			get: function () {
				return this.songs[this.currentIndex];
			},
		}),
			Object.defineProperty(this, "currentSongElement", {
				get: function () {
					return playlist.children[this.currentIndex];
				},
			});
	},
	handleEvents: function () {
		_app = this;

		// ------------- Rotate animate cd ---------------------

		//https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
		cdAnimation = cdThumb.animate([{ transform: "rotate(360deg)" }], {
			// timing options
			duration: 10000, // complete a round by 10 seconds
			iterations: Infinity,
		});
		cdAnimation.pause();

		// --------------handle zoom in/out cd------------------

		const cdWidth = cd.offsetWidth; // cd.offsetWidth = 200px for the first time
		document.onscroll = function () {
			const scrollTop =
				document.documentElement.scrollTop || window.scrollY;

			const newCdWidth = cdWidth - scrollTop;

			// width can not be nagative
			cd.style.width = newCdWidth >= 0 ? newCdWidth + "px" : 0;
			cd.style.height = cd.style.width;

			//opacity can be nagative
			cd.style.opacity = newCdWidth / cdWidth;
		};

		// --------------handle play/pause audio------------------

		playBtn.onclick = function () {
			if (_app.isPlaying) audio.pause();
			else audio.play();
		};

		audio.onplay = function () {
			// toggle btn play/pause
			player.classList.add("playing");
			// play animation cd thumb
			cdAnimation.play();
			_app.isPlaying = true;
		};

		audio.onpause = function () {
			player.classList.remove("playing");
			cdAnimation.pause();
			_app.isPlaying = false;
		};

		audio.ontimeupdate = function () {
			if (audio.duration) {
				const progressPercent =
					(audio.currentTime / audio.duration) * 100;
				progress.value = progressPercent;
			}
		};

		// --------------handle seek audio------------------

		// mobile
		progress.ontouchstart = function () {
			audio.ontimeupdate = function () {};
		};

		progress.ontouchend = function (e) {
			const seekTime = (e.target.value * audio.duration) / 100;
			audio.currentTime = seekTime;
			audio.ontimeupdate = function () {
				if (audio.duration) {
					const progressPercent =
						(audio.currentTime / audio.duration) * 100;
					progress.value = progressPercent;
				}
			};
		};
		// pc
		progress.onmousedown = function () {
			audio.ontimeupdate = function () {};
		};

		progress.onmouseup = function (e) {
			const seekTime = (e.target.value * audio.duration) / 100;
			audio.currentTime = seekTime;
			audio.ontimeupdate = function () {
				if (audio.duration) {
					const progressPercent =
						(audio.currentTime / audio.duration) * 100;
					progress.value = progressPercent;
				}
			};
		};

		// --------------handle control song --------------------------------

		//previous button
		prevBtn.onclick = function () {
			_app.removeActiveSong();
			_app.isRandom ? _app.playRandomSong() : _app.previousSong(); //main handle
			audio.play();
			_app.addActiveSong();
			_app.scrollActiveIntoView();
		};

		//next button
		nextBtn.onclick = function () {
			_app.removeActiveSong();
			_app.isRandom ? _app.playRandomSong() : _app.nextSong(); //main handle
			audio.play();
			_app.addActiveSong();
			_app.scrollActiveIntoView();
		};

		//toggle repeat button
		repeatBtn.onclick = function () {
			_app.isRepeat = !_app.isRepeat;
            _app.setConfig('isRepeat', _app.isRepeat);
			repeatBtn.classList.toggle("active", _app.isRepeat);
		};

        //toggle random button
		randomBtn.onclick = function () {
			_app.isRandom = !_app.isRandom;
            _app.setConfig('isRandom', _app.isRandom);
			randomBtn.classList.toggle("active", _app.isRandom);
		};

		//next song when audio ended
		audio.onended = function () {
			_app.isRepeat ? audio.play() : nextBtn.click();
		};

		//audio play on click
		playlist.onclick = function (e) {
			const newSongElement = e.target.closest(".song:not(.active)");
			if (newSongElement) {
				_app.removeActiveSong();
				_app.currentIndex = Number(newSongElement.dataset.index); //main handle
				_app.loadCurrentSong(); //main handle
				audio.play();
				_app.addActiveSong();
				// _app.scrollActiveIntoView()
			}
		};
	},
	removeActiveSong: function () {
		this.currentSongElement.classList.remove("active");
	},
	addActiveSong: function () {
		this.currentSongElement.classList.add("active");
	},
	scrollActiveIntoView: function () {
		setTimeout(() => {
			this.currentSongElement.scrollIntoView({
				behavior: "smooth",
				block: "end",
				// inline: "nearest"
			});
		}, 300);
	},
    loadConfig: function () {
        if(this.config) {
            this.isRandom = this.config.isRandom
            this.isRepeat = this.config.isRepeat
            repeatBtn.classList.toggle("active", this.isRepeat);
			randomBtn.classList.toggle("active", this.isRandom);
        }
        // Object.assign(this, this.config)  //this or all above is the same
    },
	loadCurrentSong: function () {
		heading.textContent = this.currentSong.name;
		cdThumb.src = this.currentSong.image;
		audio.src = this.currentSong.path;
	},
	nextSong: function () {
		//change current Index
		this.currentIndex++;
		if (this.currentIndex >= this.songs.length) {
			this.currentIndex = 0;
		}
		//load new song with new index
		this.loadCurrentSong();
	},
	previousSong: function () {
		//change current Index
		this.currentIndex--;
		if (this.currentIndex < 0) {
			this.currentIndex = this.songs.length - 1;
		}
		//load new song with new index
		this.loadCurrentSong();
	},
	playRandomSong: function () {
		//handle random index
		let newIndex;
		do {
			newIndex = Math.floor(Math.random() * this.songs.length);
		} while (newIndex === this.currentIndex);
		this.currentIndex = newIndex;

		//load new song with new random index
		this.loadCurrentSong();
	},
	start: function () {
        //load config from local storage to app
        this.loadConfig();

		// define properties for object (app) - currentSong
		this.defineProperties();

		// listen, handle events (DOM events), control
		this.handleEvents();

		// load current song to UI
		this.loadCurrentSong();

		// render playlist
		this.render();
	},
};

app.start();
