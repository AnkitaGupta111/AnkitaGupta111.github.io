const webpush = require('web-push')


module.exports = sendNotification = (subscription, dataToSend) => {

    const vapidKeys = {
        publicKey: 'BPj6sfmTangFmIyZoXksRb1dAzUvM5eQUhd8EwBRS2wnsbxhvOrzOG7 - sE1piCdQANFuZHmQiwf - qmaTyzmhZdk',
        privateKey: 'lnRv1vESvkYo1nVWVyj9HHdTi2J39iXD - A1FnEcrib4'
    };
    webpush.setVapidDetails('mailto:myuserid@email.com',
        vapidKeys.publicKey,
        vapidKeys.privateKey);
    webpush.sendNotification(subscription, dataToSend)
}




