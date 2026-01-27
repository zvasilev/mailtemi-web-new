---
title: Roadmap
page_title: What features are on our roadmap?

# works
milestones:
  - title: Calendaring
    image: "/images/calendar/day-iphone-android.png"
    description: |
      The next major release brings Calendaring — day, month, and year views, drag-and-drop event editing, recurring events, and calendar invitations. Fully native on both iOS and Android.
      <br>
      Starting with JMAP and CalDAV, with MSGraph and Google Calendar to follow. Offline editing works out of the box.
      <br>
      <a href="/blog/calendaring-progress/">Read more</a>
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
    - icon: "tabler:plug"
      title: OS Integrations
      content: Deep integration with iOS and Android system APIs. <br>Contacts synced via a JMAP server like <a href="https://stalw.art">Stalwart</a> or <a href="https://www.fastmail.com">Fastmail</a> become a single source of truth, surfaced natively through Apple's ContactProvider and Android's ContactsProvider. <br>Files stored on a JMAP server appear seamlessly in the OS file picker via Apple's FileProvider and Android's Storage Access Framework.
    - icon: "tabler:file"
      title: JMAP Files
      content: Cloud file storage over JMAP, based on the <a href="https://datatracker.ietf.org/doc/draft-ietf-jmap-filenode/">JMAP File Storage extension</a> draft. <br>Exposes files and folders as a structured hierarchy — a modern alternative to WebDAV-based file storage.
    - icon: "tabler:copy"  
      title: Move/Copy Emails Across Accounts
      content: Move or copy emails between accounts, whether they use JMAP, IMAP, or MSGraph.
---
You can email us your own ideas, too!<br /><br />
