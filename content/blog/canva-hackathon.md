---
external: false
draft: false
title: "Canva Hackathon Devlog 👩‍💻"
description: "It's been a while since my last hackathon (2 months lol) so let's join another one and document the journey 👣"
date: 2024-07-25
---

## Day 2

- Decently significant has been made!
- Features I've Implemented:
  - adding/setting width and height of bubble
  - adding main text
  - adding background color
  - adding border color
  - adding border thickness
  - adding border radius
- How it started
  - basically, the boilerplate that adds a text element onto the page
  - ![](/assets/other/speechy-progress-0.png)
- How it's going
  - ![](/assets/other/speechy-progress-1.gif)
- The developer experience using the AppSDK and AppUIKit has been really nice thusfar 😍
  - I really like that the UIKit is in a storybook with every single example clearly listed out and the grouping and use is so intuitive and easy-to-use 💗
- I'm not sure if I should be using an [AppElement](https://www.canva.dev/docs/apps/creating-app-elements/) or [ShapeElement](https://www.canva.dev/docs/apps/creating-shapes/) for the speech bubble. I've been using the AppElement so far and noticed the following:
  - it uses [HTMLCanvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
    - it's my first time using the CanvasAPI 🖼️👓
  - it generates an image and it gets blurrier/degrades in quality when resized bigger in the editor
  - the colors can't be customised using Canva's UI (but can be customised using through the AppSDK)
    - the difference is that the preview of editing would be in the "Preview" section on the left vs where the actual element is on the screen
    - and there would also have to be additional code written to implement this editing feature; because if I'm not mistaken, editing an AppElement is just replacing it with a new one so you'd have to replace it in the right spot? A problem for future me to solve :))
    - I think I'd add an option to toggle between the two in some "Advanced Settings" section
- I think I'd keep the text as just a [TextElement](https://www.canva.dev/docs/apps/creating-text/) so it can be customised and animated using Canva's existing text features
- I could be going in over my head but I think I might want to make another app that is even more complex for the hackathon O.o

## Day 1

- I'll be joining the Canva AI and Integrations Hackathon
  - ![](https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/924/866/datas/full_width.png)
  - I'm joining it a little late (there are 19 days left atm and the hackathon started about a month ago lol)
    ![Hackathon Deadline in 19 Days](</assets/other/hackathon deadline.png>)
- I'd usually do a little brainstorm and planning in Miro but since it's a Canva hackathon, I'm using Canva's Whiteboard feature 🙌
  - ![](/assets/other/canva-hackathon-moscow.png)
- Dev Experience: Ngl, it was a bit of a struggle to figure out where to go to find specific information about things because not all things Canva-Developers-related is in the same URL. The key links I've bookmarked for this hackathon:
  - [Canva Developers > Apps DSK Docs](https://www.canva.dev/docs/apps/)
  - [Canva Developers Community](https://community.canva.dev/)
  - [The AppUIKit Storybook](https://www.canva.dev/docs/apps/app-ui-kit)
  - [Starter Kit Repo](https://github.com/canva-sdks/canva-apps-sdk-starter-kit)
    - Initially thought that I didn't need this because I used the [`@canva/create-app` CLI](https://community.canva.dev/t/introducing-canva-create-app-cli/3129) to create my project, then I got confused because the docs were making imports from files that did not exist from the boilerplate, then I realised that the Starter Kit is not just the basic boilerplate code, like example code, util functions, hooks, etc.
  -

---

> Lol, I realise that this little DevLog low key looks like it's sponsored by Canva, but I would really like to work there if anyone wants to give me a referral 👀
