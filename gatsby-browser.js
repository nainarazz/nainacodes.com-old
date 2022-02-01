// eslint-disable-next-line import/no-import-module-exports
require('@fontsource/open-sans');

exports.onServiceWorkerUpdateReady = () => {
  // eslint-disable-next-line no-alert
  const answer = window.confirm(
    `Application has been updated. Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};
