module.exports = {
	config: {
		name: "girlsvideo",
		aliases: ["girl"],
		version: "1.0",
		author: "ShAn",
		countDown: 5,
		role: 0,
		shortDescription: "send a video of girls",
		longDescription: "sends a video of hot girls ",
		category: "18+",
		guide: "{pn}"
	},

	onStart:async function ({ api, event, message }) {
api.setMessageReaction("🥵", event.messageID, (err) => {}, true);
	 var link = [ 
"https://imgur.com/AbGWbid.mp4",
"https://imgur.com/2YwGfBM.mp4",
"https://i.imgur.com/rGC1506.mp4",
"https://imgur.com/UNajJXU.mp4",
"https://imgur.com/3E31yMu.mp4",
"https://imgur.com/kys5gTW.mp4",
"https://imgur.com/1atcC9J.mp4",
"https://imgur.com/dFP6opS.mp4",
"https://imgur.com/jUiYGA9.mp4",
"https://imgur.com/yzm3a2A.mp4",
"https://imgur.com/VltgqfQ.mp4",
"https://imgur.com/cjK2Gt6.mp4",
"https://i.imgur.com/KR3QNLt.mp4",
"https://i.imgur.com/JeGuszy.mp4",
"https://i.imgur.com/QZt6muB.mp4",
"https://imgur.com/kOB96pO.mp4",
"https://imgur.com/gp66dAM.mp4",
"https://imgur.com/UP4NyTq.mp4",
"https://imgur.com/QZzHfp9.mp4",
"https://imgur.com/BxJLVSE.mp4",
"https://i.imgur.com/WHufh9S.mp4",
"https://i.imgur.com/tiW09hZ.mp4",
"https://i.imgur.com/T6Bw3jI.mp4",
"https://i.imgur.com/v37DRcv.mp4",
"https://i.imgur.com/La0R5ep.mp4"
]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
	body: '「 YOUR BABY💦🥵 」',attachment: await global.utils.getStreamFromURL(img)
})
}
}
