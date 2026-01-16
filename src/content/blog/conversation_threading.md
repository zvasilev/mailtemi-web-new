---
title: "Consistent Conversations"
subtitle: Threading That Works Across Protocols
image: "/images/posts/email-threading-traditional.svg"
author: Zhivko Vasilev
date: 2026-01-15T05:00:00Z
categories: [JMAP", "IMAP", "Email", "MSGraph"]
featured: false
draft: true
---

The next Mailtemi release improves how conversations are displayed and threaded.

At first glance, the changes look modest. The email list now shows participant names in a more consistent format, and drafts appear in context rather than hidden away. But under the hood, this release tackles one of the harder problems in multi-protocol email clients: making conversations behave consistently regardless of how the server handles threading.

## A brief history of email threading

Email threading has been a problem for over forty years.

The original email format standard, RFC 822, was published in 1982. It defined headers like `Message-ID`, `In-Reply-To`, and `References` that could be used to link messages together. But the definitions were vague, and the standard allowed more flexibility than mail programs could actually handle.

In practice, different email clients interpreted these headers differently. Some ignored `References` entirely. Some truncated it after a few entries. Some relied on subject line matching instead. The result was that threading worked sometimes, on some clients, with some servers — but never reliably everywhere.

By the late 1990s, Jamie Zawinski (one of the original Netscape engineers) had developed a threading algorithm for Netscape Mail that could handle the chaos. His algorithm was designed to be "incredibly robust in the face of garbage input" — it could reconstruct threads even when headers were missing, malformed, or inconsistent. This algorithm was later formalized as RFC 5256 in 2008 and remains the basis for threading in many email clients today.

Gmail, launched in 2004, popularized the conversation view that grouped related messages together. It worked well because Gmail controlled both the client and the server. But for email clients that talk to multiple servers using different protocols, the problem remained.

## The problem: every protocol threads differently

Even today, threading is not standardized. Different servers and protocols handle it in incompatible ways:

- **JMAP servers** often assign drafts and sent items their own separate thread IDs
- **Gmail** returns sent and draft items with the same `threadId` as the original conversation
- **IMAP** has no native threading at all — clients must reconstruct conversations from MIME headers (`In-Reply-To`, `References`)
- **MS Exchange** uses a proprietary `thread-index` header that other servers ignore

The result is that a multi-account email client can feel inconsistent. Your Gmail account might thread conversations correctly, while your Fastmail or Exchange account seems to scatter replies and drafts across unrelated views.

Users should not have to think about any of this. A conversation should just feel like a conversation.

## What changed visually

The email list now displays conversations with participant information at a glance:

**Before:** Subject line and sender name only
**After:** "Alice, me, Bob 3" — showing participants, whether you replied, and the message count

Drafts now appear at the bottom of the conversation viewer instead of being isolated in the Drafts folder. A red "Draft" label makes them easy to identify, and a delete button allows quick cleanup. This makes it natural to continue editing a reply or discard it.

## Why full context matters

This is not just about aesthetics.

When drafts are disconnected from their parent conversation, you lose context. You have to remember what you were replying to, or navigate back to find the original thread. It is easy to lose track of half-written replies, especially across multiple accounts.

With drafts appearing in context:
- You see exactly what you were replying to
- You can continue editing or discard directly
- The conversation list shows when you have a draft waiting, so you know work is pending

This also helped on the development side. Threading bugs — where sent items or drafts failed to join the right conversation — became much easier to detect. If the conversation display looks wrong, something is wrong. The UI became a debugging tool.

## How the top row works

The participant display uses a two-pass algorithm:

**Pass 1:** Scan all items to detect if the user sent any email in this conversation

**Pass 2:** Collect participant names from all items, filtering out the user's own addresses

The result is rendered as "Alice, me, Bob" — where "me" appears only if you actually participated. Message count (excluding drafts) appears at the end.

The UI handles truncation carefully, avoiding mid-word breaks. On iOS, this uses Canvas-based text measurement to calculate exactly how many names fit.

## Cross-protocol threading

To make conversations consistent across protocols, Mailtemi relies on official email standards:

**RFC 5322 headers:** When composing a reply, the app generates proper `In-Reply-To` and `References` headers. These are the standard MIME headers that email servers use to establish threading relationships. Any standards-compliant server will recognize these and thread the conversation correctly.

**JMAP threading:** For JMAP accounts, the server provides explicit thread IDs. However, different JMAP servers behave differently — some group drafts and sent items together, others do not. The app handles both cases.

**IMAP reconstruction:** IMAP has no native threading. The app reconstructs conversations by analyzing the `In-Reply-To` and `References` headers of each message, building the thread structure locally.

**MS Exchange:** For Exchange accounts, the app also respects the `thread-index` header used by Microsoft Outlook, ensuring compatibility with messages sent from Outlook clients.

## Looking ahead

This work is also a foundation for future improvements.

Search within conversations becomes more useful when the conversation structure is reliable. Conversation-level actions (archive all, snooze, mute) depend on knowing exactly which items belong together.

For now, the goal was correctness: make conversations feel consistent regardless of which account or protocol is involved. The UI may not look dramatically different, but the threading underneath is now significantly more reliable.

---

## Sources

- [RFC 822 - Standard for the Format of ARPA Internet Text Messages (1982)](https://www.rfc-editor.org/rfc/rfc822)
- [RFC 5322 - Internet Message Format (2008)](https://datatracker.ietf.org/doc/html/rfc5322)
- [RFC 5256 - IMAP SORT and THREAD Extensions](https://datatracker.ietf.org/doc/html/rfc5256)
- [JWZ Message Threading Algorithm](https://www.jwz.org/doc/threading.html)
