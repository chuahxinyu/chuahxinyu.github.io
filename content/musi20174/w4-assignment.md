---
external: false
draft: false
title: "Practical Studio Assignment, Submission 1"
description: "A detailed examination of microphone recordings, comparing laptop, external microphone, and phone recordings, and provides valuable insights into ambient noise, recording quality, and potential future improvements in a practical studio setting."
date: 2023-08-29
---

## Objective

- Record a single recording of your voice
  - do not apply any additional effects or processing
  - do not include any instruments
  - no more than 20 seconds in length

## Equipment and Software Used

I tried recording using my phone's microphone, my laptop's built-in microphone and an external microphone from a pair of earphones plugged into my laptop to compare and contrast the qualities of the recordings.

In terms of software, I used my phone's built-in voice recorder application ([Samsung Voice Recorder](https://play.google.com/store/apps/details?id=com.sec.android.app.voicenote&hl=en_AU&gl=US)) on my phone and used [Waveform 12](https://www.tracktion.com/products/waveform-free) on my laptop.

## Location and set-up of equipment

With a goal of having the least amount of ambient noise possible, I don't have too many options for recording locations so I have made all recordings at the desk in my room. I placed each microphone about 20-30cm away from the source. Through a bit of research, the microphones on my phone, laptop and earphones are most likely [omnidirectional microphones](/notes/2023-musi20174-w4/#polar-patterns-and-headroom). This means that they capture sound from all directions equally and as such, the direction in which the microphone is facing does not matter.

- Image of set-up of equipment at my desk
  ![Equipment setup image](/assets/musi20174/equipment-setup.png)

The recordings and their waveforms are as follows

- Audio Recording on Laptop's Built-in Microphone
  {% audio mp3Src="/assets/musi20174/laptop-built-in.mp3" oggSrc="/assets/musi20174/laptop-built-in.ogg" /%}
- Audio Recording on Laptop with an External Microphone
  {% audio mp3Src="/assets/musi20174/laptop-external.mp3" oggSrc="/assets/musi20174/laptop-external.ogg" /%}
- Audio Recording on Phone's Microphone
  {% audio mp3Src="/assets/musi20174/phone.mp3" oggSrc="/assets/musi20174/phone.ogg" /%}
- Waveforms of all 3 recordings on Waveform 12
  ![Waveform diagram](/assets/musi20174/waveform.png)

From the waveforms and the recordings, I observed that:

- The laptop's built-in microphone's waveform has the smallest amplitude and is the softest recording out of the three. It also did not pick up some parts of audio that were too soft.
- The laptop with the external microphone on the earphones had the least amount of ambient noise.
- The phone's microphone picked up the ambient noise of the room a bit more than the laptop with the external microphone but also had a higher amplitude of sounds overall.

## Settings that you used to record

On the Laptop, I used Waveform 12's default settings on the laptop and the 'Standard' mode on Samsung Voice Recorder.

- Image of Waveform 12 recording settings (used for both built-in and external microphone recordings)
  ![Recording Settings](/assets/musi20174/recording-settings.png)
- Image of Samsung Voice Recorder settings
  ![Phone Recording Settings](/assets/musi20174/samsung-voice-recorder.png)

I added an Normalise Layer to each of the clips to bring the amplitude to a target level (the norm) by applying a constant amount of gain to the audio recording.

- Gif of how normalising a clip affects its waveform's amplitude
  ![](/assets/musi20174/normalising.gif)
- Image of waveforms of the recordings after applying normalisation
  ![](/assets/musi20174/waveform-normalised.png)
- Audio Recording on Laptop's Built-in Microphone after Normalising
  {% audio mp3Src="/assets/musi20174/laptop-built-in-normalised.mp3" oggSrc="/assets/musi20174/laptop-built-in-normalised.ogg" /%}
- Audio Recording on Laptop with an External Microphone after Normalising
  {% audio mp3Src="/assets/musi20174/laptop-external-normalised.mp3" oggSrc="/assets/musi20174/laptop-external-normalised.ogg" /%}
- Audio Recording on Phone's Microphone after Normalising
  {% audio mp3Src="/assets/musi20174/phone-normalised.mp3" oggSrc="/assets/musi20174/phone-normalised.ogg" /%}

After normalisation, I observed that:

- The ambient sound from the laptop's built-in microphone was louder than before and the distortion of the sound is more obvious.
- There is a clear distinction that teh laptop with an external microphone had little to no ambient noise, especially when compared to the other two recordings. There were also no distinct distortions to the sound.

## Reflection

- The laptop's built-in microphone was least effective at capturing true sound quality as it significantly distorts the recording.
- Between the laptop with an external microphone and the phone microphone, the external microphone's recording's quality is closest to the source and provides a clean, crisp recording of the sound source; however, the phone microphone is better at capturing ambient sound of the space.
- I think the recording process went well and it was useful to have plosive sounds in my test.
- In the future, I might try testing the laptop with an external microphone and phone microphone on a larger range of sounds (for instance, sounds from instruments, or sounds that are very loud or very soft) and performing more comparisons.
- Additionally, I might also try different locations and setting up the microphones at different distances.
