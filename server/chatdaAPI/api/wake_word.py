import struct

import pvporcupine
import pyaudio
import os

from keys import setup
setup()

porcupine = pvporcupine.create(
    access_key=os.environ["PORCUPINE_KEY"],
    keyword_paths=['../secret/wasm_window.ppn'],
    model_path="../secret/porcupine_params_ko.pv"
)

pa = pyaudio.PyAudio()


def get_next_audio_frame():
    return pa.open(
        rate=porcupine.sample_rate,
        channels=1,
        format=pyaudio.paInt16,
        input=True,
        frames_per_buffer=porcupine.frame_length)


# 음성 감지
def detectedVoice():
    audio_stream = None
    try:
        audio_stream = get_next_audio_frame()

        while True:
            pcm = audio_stream.read(porcupine.frame_length)
            pcm = struct.unpack_from("h" * porcupine.frame_length, pcm)

            keyword_index = porcupine.process(pcm)
            if keyword_index >= 0:
                print("네 부르셨어요~?")

    finally:
        porcupine.delete()
        audio_stream.close()


if __name__ == "__main__":
    detectedVoice()
