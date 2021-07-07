new Vue({
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            tracks: [{
                    name: "Pareja del año ",
                    artist: " Sebastian Yatra ",
                    cover: "./img/s2.jpg",
                    source: "./mp3/pareja.mp3",
                    url: "https://www.youtube.com/watch?v=-hPU1uMHzEE",
                    favorited: false
                },
                {
                    name: "Sanizka",
                    artist: "Sebastian Yatra ",
                    cover: "./img/img1.jpg",
                    source: "./mp3/cris.mp3",
                    url: "https://www.youtube.com/watch?v=oMgHl3n71cE",
                    favorited: true
                },
                {
                    name: "Como te veo ",
                    artist: " Darho ",
                    cover: "./img/s3.jpg",
                    source: "./mp3/teveo.mp3",
                    url: "https://www.youtube.com/watch?v=uapuQWLu0Jk",
                    favorited: false
                },
                {
                    name: "Viernes 13",
                    artist: "Marcos mechaca ",
                    cover: "./img/s2.jpg",
                    source: "./mp3/viernes13.mp3",
                    url: "https://www.youtube.com/watch?v=ubq19HWOYo4",
                    favorited: false
                },
                {
                    name: "Trellas ",
                    artist: "Bad Bunny ",
                    cover: "./img/s4.jpg",
                    source: "./mp3/trellas.mp3",
                    url: "https://www.youtube.com/watch?v=4S7XszqDT6s",
                    favorited: false
                },
                {
                    name: "Todo de ti ",
                    artist: "Rauw alejandro",
                    cover: "./img/s3.jpg",
                    source: "./mp3/tdt.mp3",
                    url: "https://www.youtube.com/watch?v=qUYNzOE8ixg",
                    favorited: false
                },
                {
                    name: "Gwiyomi ",
                    artist: " Hari ",
                    cover: "./img/s8.jpg",
                    source: "./mp3/gwiyomi.mp3",
                    url: "https://www.youtube.com/watch?v=M6yW5lWIQ0M",
                    favorited: false
                },
                {
                    name: "Break the distance ",
                    artist: "Asthon Edminster",
                    cover: "./img/s7.jpg",
                    source: "./mp3/btd.mp3",
                    url: "https://www.youtube.com/watch?v=mbRYw6CTR3Q",
                    favorited: true
                },
                {
                    name: "Ill wait ",
                    artist: "Kygo and Sasha sloan ",
                    cover: "./img/s6.jpg",
                    source: "./mp3/illwait.mp3",
                    url: "https://www.youtube.com/watch?v=kDtWLAPfu5s",
                    favorited: true
                },
                {
                    name: "Forever ",
                    artist: "Lewis capaldi ",
                    cover: "./img/s7.jpg",
                    source: "./mp3/lewisforever.mp3",
                    url: "https://www.youtube.com/watch?v=VovCBdXWc3w",
                    favorited: true
                },

                {
                    name: "Iris ",
                    artist: "Sleeping with sirens ",
                    cover: "./img/s6.jpg",
                    source: "./mp3/iris.mp3",
                    url: "https://www.youtube.com/watch?v=rCcMjK5AorM",
                    favorited: false
                },
                {
                    name: "Jealous ",
                    artist: "Labrith ",
                    cover: "./img/s4.jpg",
                    source: "./mp3/jealous.mp3",
                    url: "https://www.youtube.com/watch?v=zZ1oD8xVn0I",
                    favorited: false
                },
                {
                    name: "Locked away ",
                    artist: "Adam levine ",
                    cover: "./img/s1.jpg",
                    source: "./mp3/la.mp3",
                    url: "https://www.youtube.com/watch?v=8Y6raDtv0fc",
                    favorited: false
                },
                {
                    name: "Love is gone ",
                    artist: "Slander ft. Dylan Matthew",
                    cover: "./img/s7.jpg",
                    source: "./mp3/loveisg.mp3",
                    url: "https://www.youtube.com/watch?v=nSAYRU2a0Ws",
                    favorited: true
                },
                {
                    name: "Montero ",
                    artist: "Lil Nas X ",
                    cover: "./img/s1.jpg",
                    source: "./mp3/montero.mp3",
                    url: "https://www.youtube.com/watch?v=nsXwi67WgOo",
                    favorited: false
                },
                {
                    name: "bokura dake no shudaika ",
                    artist: "Given  ",
                    cover: "./img/s91.jpg",
                    source: "./mp3/bokura.mp3",
                    url: "https://www.youtube.com/watch?v=xwDKsQSaEG4",
                    favorited: true
                },
                {
                    name: "Hikaru Nara ",
                    artist: "Goose House",
                    cover: "./img/s5.jpg",
                    source: "./mp3/shigatsu.mp3",
                    url: "https://www.youtube.com/watch?v=5_iuNaULT5k",
                    favorited: true
                },
                /*
                {
                    name: " ",
                    artist: "  ",
                    cover: "./img/s.jpg",
                    source: "./mp3/.mp3",
                    url: "",
                    favorited: false
                },
                */

            ],
            currentTrack: null,
            currentTrackIndex: 0,
            transitionName: null
        };
    },
    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
        },
        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime;
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        },
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = (maxduration * percentage) / 100;
            this.audio.play();
        },
        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
        },
        prevTrack() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentTrackIndex > 0) {
                this.currentTrackIndex--;
            } else {
                this.currentTrackIndex = this.tracks.length - 1;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        nextTrack() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
            } else {
                this.currentTrackIndex = 0;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentTrack.source;
            setTimeout(() => {
                if (this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.tracks[this.currentTrackIndex].favorited = !this.tracks[
                this.currentTrackIndex
            ].favorited;
        }
    },
    created() {
        let vm = this;
        this.currentTrack = this.tracks[0];
        this.audio = new Audio();
        this.audio.src = this.currentTrack.source;
        this.audio.ontimeupdate = function() {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function() {
            vm.generateTime();
        };
        this.audio.onended = function() {
            vm.nextTrack();
            this.isTimerPlaying = true;
        };

        // this is optional (for preload covers)
        for (let index = 0; index < this.tracks.length; index++) {
            const element = this.tracks[index];
            let link = document.createElement('link');
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image"
            document.head.appendChild(link)
        }
    }
});