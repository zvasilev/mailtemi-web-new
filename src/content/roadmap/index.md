---
title: Roadmap
page_title: What features are on our roadmap?

# works
milestones:
  - title: Android
    image: "/images/android/android.png"
    description: |
      The goal is to bring the same functionality as the iOS version to Android, using native Android components and UX principles. 
      This will ensure a seamless, optimized, and intuitive email experience tailored for Android users.
      <br>
      There are 4+2 UI screens to port from iOS: four complex (Mailbox, Email List, Email Viewer, Composer) and two smaller, scattered screens (Settings sub-screens, error/Auth popups, toasts views). 
      While all screens are functional, they are not yet polished for end-user use.
      <br>
      Excited to announce that the first UI-ready screen is finished: Compose.
  - title: MacOS
    image: "/images/mac/mac.png"
    description: |
      🚀 Mailtemi email app runs on macOS! <br>Our goals for the MacOS version of our app are ambitious. <br>We aim to provide full offline support, not just a cached subset of messages like in mobile versions. We're also working on features that will allow you to copy or move messages between accounts. <br><br>Additionally, we're developing the ability to import and export messages in **[MBOX](https://en.wikipedia.org/wiki/Mbox)** format. <br>While there is still work to be done, we're excited about the progress we've made so far.
              
## key features
key_features:
  title: "Other features in the roadmap"
  description:  
  feature_list:
    - icon: "tabler:notification"  
      title: Push Notifications
      content: Will be limited to JMAP, MSGraph, and GMail API, which offer this notification mechanisms.<br><br>IMAP cannot achieve push notifications without requiring access to the user's password, which is not acceptable and will not be supported.
    - icon: "tabler:users"  
      title: JMAP Contacts
      content: We're closely following the development of the JMAP Contacts specification. <br> Once it has completed the RFC process, we plan to support it in our application. <br>This will allow us to provide even more robust and efficient contact management features.
    - icon: "tabler:calendar"  
      title: JMAP Calendars
      content: Calendaring is complex and a long-term goal. <br>To become a fully-featured collaboration app, we are committed to adding JMAP calendar support in the future.
    - icon: "tabler:copy"  
      title: Move/Copy Emails Across Accounts
      content: Move or copy emails between accounts, whether they use JMAP, IMAP, or MSGraph.
---
You can email us your own ideas, too!<br /><br />
