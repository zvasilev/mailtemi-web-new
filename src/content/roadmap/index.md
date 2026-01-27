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
    - icon: "tabler:users"  
      title: JMAP Contacts
      content: We're closely following the development of the JMAP Contacts specification. <br> Once it has completed the RFC process, we plan to support it in our application. <br>This will allow us to provide even more robust and efficient contact management features.
    - icon: "tabler:calendar"
      title: JMAP Calendars
      content: Calendaring is actively in progress. <br>JMAP Calendar and CalDAV support are coming in the next major release, with MSGraph and Google Calendar to follow. <a href="/blog/calendaring-progress/">Read more</a>.
    - icon: "tabler:copy"  
      title: Move/Copy Emails Across Accounts
      content: Move or copy emails between accounts, whether they use JMAP, IMAP, or MSGraph.
---
You can email us your own ideas, too!<br /><br />
