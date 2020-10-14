exports.onInitialClientRender = () => {
    // eslint-disable-next-line global-require
    require('typeface-roboto-slab');
    // eslint-disable-next-line global-require
    require('typeface-roboto');
}

exports.onServiceWorkerUpdateReady = () => {
    // eslint-disable-next-line no-alert
    const answer = window.confirm(
        `Application has been updated. ` +
        `Reload to display the latest version?`
    )

    if (answer === true) {
        window.location.reload()
    }
}