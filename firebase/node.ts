import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: 'hosininaritai-29e44',
      clientEmail:
        'firebase-adminsdk-xiwqk@hosininaritai-29e44.iam.gserviceaccount.com',
      privateKey:
        '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCa04S4QGP5ngNa\n3LJWG1xr7lDT7aPv7ao0joVnkPPJnvG+SvmGrx/ZSs4/UNXn0h47n666uO8Zlk1H\n8nzOQdvo9P0IuAx1znEjcmnlS9HatF+cDRBLIVg+9lFWQWuHV+/ntlNooWyWfaAz\nim1jqImDbVZcocufV8OOoeiMdDaewRM55pyQCLui0JqATAvLyTeekcgPuzKfQgOB\nELFKhqbXigLX0+Ojlw0XnP7Ce4RTQgOMSO5KEKXdt6lW0taeZH06g3zaz77VPknR\nNoc/lDwV6xMXU6W6TSgc/NTcPH1qYkHywGFJLVtYeUE7+rjO+7M5ClmrL7vqoxE8\nop0AAaq7AgMBAAECggEAAqmWg7Cfx4AfIKXg7zgjO7vqaeqRQiP9JFA7HQ/SEWqJ\nT7NsXROP4aW2rEIQm57yZCYX1CAwBGmgRJd36/gX9waXf1ni5Pe63FgwWAAYyMEH\nT+Ctog0dvl9wAKK5Xad2ea6Z+pekDWZ1pc1AmlEgpEDyFj+2B7RzqXVBUYECG3LB\nrfokiwGfE3lc7DzOd9L45kYT0pKlNFgYynwg4GogmhoxZqwa0B8/gsrqfa9YzJwl\n58tpXB1BL2T45u2bDQ3phRqTo+vKE0Y7n6fc81HQEK/1S01XFXwREpHLYPhS22pg\n/9/vau3yKgY1HpU2y1XK2KSVmz3G21c7SW2YXY22aQKBgQDQ2jsHPPvoTQwoYbIm\nA0aaiksTvChPuymlEAE7LQOnYuX0Jj1MyUMo9/itvB/9F14qRLHYf/hXyjgVRGMD\nZMY/h5llfqDxRwttePVBFbA93y3lhaf9PtbaJEh7Dnm5GKq4YmdtDaxvGv86cuIQ\nNwZwidU4d7w1gc16BBgqwC9UNQKBgQC9xxCMNFjnE1beVaIkVXiug5X1Xw1fJTgj\ntFDMiWhq2KJaXaeD8p568W7fFdc3SU3PwJcMz6JYYLG2KtqXVZDvjhgItZU/zF5F\nFkU5oPjNt4dY5Vhu01XsJti08fINv5rSbASdQ5k073qs4Y2OWK02UcAXBMxRrwEP\nsEbNTakBLwKBgHeX/6UtbrKfLA8ToofR6GQmPMeYPx0o97flak8Qf78iCru8Ce4m\ncabMGEKkL00mTG232H85CGR9D5BeELSoyD0o0NYlpNOE8y5EzWvvl3RWkFmWJ5QE\nn9NaY4bTyzAKx/e9oav44Hze4Lf/gSP33mAjDU3Agq3BHoB4R75zPqbhAoGAZAqw\nWnit9QJo5MPXubek6rpLLxJwhhukwI2pmmlFNi4FSAXe7NvVV5I2lDt7PJXUAxTP\ni91ZA6XViOaGXQiqYt5RJSY0C3G8sEbRL1QAVNHO87nTKHkX7ml8C8cPhtfe0dZH\niG++L/2eecxdRxDQHrZxwLCy1MygjpiqekfaM9kCgYEAx64We/wnmbqqrlTqzojV\nFlgr+3PZPfVWZ551HrwVXXM3qbu37/iaNfsgwYBPrRSiCFtgV1poxeiErLE1tDYx\nlbwLg81rKHCa5RTboasiAX+J8YR+250tUrTa+GzSg0k3QZphvCFlrWb96Pmq/krB\nVPUlNxHQu4ArzGmeMKXSz9Y=\n-----END PRIVATE KEY-----\n',
    }),
  });
}

export default admin;
