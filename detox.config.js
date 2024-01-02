module.exports = {
    testRunner: 'jest',
    runnerConfig: 'e2e/config.json',
    configurations: {
        'android.emulator': {
          type: 'android.emulator',
          binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
          device: {
            avdName: 'Pixel_7_PRO_API_33', // Specify the name of your AVD (Android Virtual Device)
          },
        },
      },
      
  };