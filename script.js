const slangData = [
    { word: "Ace-high", definition: "Kelas satu, sangat dihormati, atau yang terbaik.", example: "He’s an ace-high gambler." },
    { word: "A lick and a promise", definition: "Melakukan pekerjaan dengan terburu-buru atau tidak tuntas.", example: "He just gave the boots a lick and a promise." },
    { word: "Apple Pie Order", definition: "Sesuatu yang sangat rapi dan tertata.", example: "The saloon was in apple pie order." },
    { word: "Bellycheer", definition: "Makanan yang sangat enak atau pesta besar.", example: "That’s some fine bellycheer, mama!" },
    { word: "Bender", definition: "Mabuk-mabukan yang berlangsung lama.", example: "He’s been on a bender for three days." },
    { word: "Big Bug", definition: "Orang penting atau bos besar.", example: "The railroad big bugs are coming to town." },
    { word: "Buckaroo", definition: "Sebutan untuk koboi (berasal dari bahasa Spanyol 'Vaquero').", example: "Listen up, young buckaroos!" },
    { word: "Chuck Wagon", definition: "Gerobak yang membawa makanan di perjalanan jauh.", example: "Head over to the chuck wagon for some beans." },
    { word: "Coffee Cooler", definition: "Orang malas yang hanya mencari pekerjaan mudah.", example: "Don't be a coffee cooler, get to work!" },
    { word: "Doughnugh", definition: "Sebutan untuk orang bodoh.", example: "You’re acting like a real doughnut." },
    { word: "Flapjack", definition: "Kue dadar atau pancake.", example: "I could eat a stack of flapjacks." },
    { word: "Huckleberry", definition: "Orang yang tepat untuk melakukan suatu pekerjaan.", example: "I'm your huckleberry." },
    { word: "Hog-Ranch", definition: "Tempat hiburan kelas bawah atau saloon murahan.", example: "Stay away from that hog-ranch." },
    { word: "Iron Horse", definition: "Sebutan untuk kereta api uap.", example: "The iron horse is changing the west." },
    { word: "Mighty Glad", definition: "Sangat senang.", example: "I’m mighty glad to see you, partner." },
    { word: "Nose Paint", definition: "Wiski (karena membuat hidung merah jika terlalu banyak).", example: "Gimme a glass of that nose paint." },
    { word: "On the Shoot", definition: "Seseorang yang sedang marah dan mencari keributan.", example: "Watch out, Billy is on the shoot again." },
    { word: "Paint Your Tonsils", definition: "Minum alkohol (biasanya wiski keras).", example: "Come on, let’s go paint our tonsils." },
    { word: "Quirley", definition: "Rokok yang digulung sendiri.", example: "He’s rolling a quirley." },
    { word: "Rawhide", definition: "Koboi yang belum berpengalaman.", example: "That rawhide doesn't know how to rope." },
    { word: "Skedaddle", definition: "Pergi dengan cepat atau melarikan diri.", example: "You better skedaddle before the sheriff arrives." },
    { word: "Taradiddle", definition: "Kebohongan atau omong kosong.", example: "That’s a load of taradiddle!" },
    { word: "Tanglefoot", definition: "Wiski berkualitas buruk.", example: "That tanglefoot will make you blind." },
    { word: "Yellow-belly", definition: "Pengecut.", example: "Don't be a yellow-belly, face him!" },
    { word: "Above Board", definition: "Jujur dan terbuka.", example: "The deal was all above board." },
    { word: "Airin' the Lungs", definition: "Berteriak atau menyanyi dengan keras.", example: "He's just airin' his lungs." },
    { word: "Barn Sour", definition: "Kuda yang tidak sabar ingin pulang ke kandang.", example: "This horse is getting barn sour." },
    { word: "Beef-head", definition: "Orang bodoh.", example: "Shut up, you beef-head." },
    { word: "Boot Hill", definition: "Sebutan untuk pemakaman di Old West.", example: "He’ll end up in Boot Hill by sunset." },
    { word: "Calaboose", definition: "Penjara lokal.", example: "Spending a night in the calaboose." },
    { word: "Cat-wagon", definition: "Gerobak yang membawa wanita penghibur.", example: "The cat-wagon followed the trail." },
    { word: "Dead-alive", definition: "Sangat membosankan atau tidak bersemangat.", example: "This town is dead-alive." },
    { word: "Dogie", definition: "Anak sapi piatu atau kecil.", example: "Get along little dogies." },
    { word: "Full as a tick", definition: "Sangat mabuk.", example: "He’s full as a tick after that party." },
    { word: "Gullywasher", definition: "Hujan yang sangat deras.", example: "That was a real gullywasher last night." },
    { word: "Heeled", definition: "Membawa senjata api.", example: "Is he heeled?" },
    { word: "Hoosegow", definition: "Penjara (serapan dari bahasa Spanyol 'juzgado').", example: "Lock him in the hoosegow." },
    { word: "Kick the Bucket", definition: "Meninggal dunia.", example: "Old Pete finally kicked the bucket." },
    { word: "Lickety-split", definition: "Sangat cepat.", example: "He ran off lickety-split." },
    { word: "Mishmash", definition: "Kekacauan atau campuran yang berantakan.", example: "His room is a total mishmash." },
    { word: "Nifty", definition: "Bagus, rapi, atau keren.", example: "That’s a nifty hat you got there." },
    { word: "Old Adam", definition: "Nafsu jahat atau kemarahan manusia.", example: "The Old Adam got the best of him." },
    { word: "Pass the buck", definition: "Melempar tanggung jawab ke orang lain.", example: "Don't pass the buck to me." },
    { word: "Ruckus", definition: "Keributan atau perkelahian.", example: "They started a ruckus in the saloon." },
    { word: "Shin-dig", definition: "Pesta dansa atau perayaan.", example: "There's a shin-dig at the ranch tonight." },
    { word: "Ten-cent Man", definition: "Orang yang berpikiran sempit atau murahan.", example: "He's just a ten-cent man." },
    { word: "Vamoose", definition: "Pergi sekarang juga.", example: "Vamoose, kid!" },
    { word: "Waddy", definition: "Koboi pengganti atau sementara.", example: "He’s just a waddy for the season." },
    { word: "Zebra", definition: "Sebutan untuk narapidana berbaju garis-garis.", example: "The zebras are working on the road." }
    // Tambahkan terus sampai 500 kata...
];

function displaySlang(data) {
    const grid = document.getElementById('dictionaryGrid');
    grid.innerHTML = '';
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.word}</h3>
            <p>${item.definition}</p>
            <span class="example">" ${item.example} "</span>
        `;
        grid.appendChild(card);
    });
}

function searchSlang() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = slangData.filter(item => 
        item.word.toLowerCase().includes(searchTerm) || 
        item.definition.toLowerCase().includes(searchTerm)
    );
    displaySlang(filteredData);
}

// Inisialisasi awal
displaySlang(slangData);