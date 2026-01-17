---
title: "JMAP Contacts"
subtitle: Laying the Groundwork
image: "/images/posts/jmap-contacts.svg"
author: Zhivko Vasilev
date: 2026-01-16T05:00:00Z
categories: [JMAP", "Email", "Contacts"]
featured: false
draft: true
---

Why protocol correctness matters more than UI when building contact synchronization.

The next Mailtemi release focuses on **JMAP Contacts**.

At first glance, this update does not look dramatic. On iOS, the UI is almost unchanged. On Android, Contacts finally have a visible interface, but it is intentionally minimal and functional. This is not a visual redesign release.

This work is about strengthening the foundation.

---

## Why JMAP Contacts, and why now

Mailtemi already supports multiple contact backends: CardDAV, Microsoft Graph, and the Google People API. Each of these protocols exposes different behaviors around partial updates, conflict handling, and synchronization guarantees.

As the app evolved, it became clear that treating all backends as peers led to complexity and edge cases that were difficult to reason about. For this release, **JMAP Contacts becomes the internal reference model**. Other protocols are treated as adapters that map into and out of JMAP semantics.

This inversion is deliberate. It keeps the core predictable, makes behavior testable in isolation, and avoids encoding protocol quirks into the application logic itself.

Mailtemi already uses JMAP for email synchronization, where explicit state and batched updates eliminate much of the ambiguity inherent in legacy IMAP-based workflows. Contacts are the next domain where these properties matter.

---

## JSContact: familiar concepts, cleaner semantics

JMAP Contacts are based on **JSContact**, a modern JSON-based contact format.

If you have worked with vCard, most concepts will feel familiar: names, email addresses, phone numbers, organizations. JSContact keeps these ideas but removes much of the accumulated ambiguity.

Instead of line-oriented text with implicit meaning, JSContact defines a structured object model with explicit fields and types. This makes validation, partial updates, and serialization more predictable — an important property for synchronization-heavy clients.

For Mailtemi, this clarity matters more than format aesthetics. A contact model that is easy to reason about is a prerequisite for correct conflict handling and reliable incremental updates.

---

## PatchObject and local intent

One of the main goals of this work is correct handling of **pending local changes**.

JMAP allows clients to express *intent* using `PatchObject`, rather than resending full objects. Mailtemi now maintains a strict separation between:

- the last confirmed server state
- local edits that have not yet been acknowledged

The UI always presents a unified view, but internally these layers remain distinct. This enables offline editing, retrying failed operations, and rebasing local changes cleanly when the server state evolves.

This separation is subtle but critical. Without it, retry logic and conflict resolution quickly become fragile and unpredictable.

---

## Conflicts are expected, not exceptional

This release significantly expands test coverage for conflict scenarios, including:

- concurrent edits from different clients
- same-field modifications
- delete-versus-update races
- server rejections due to outdated state

In email, conflicts usually affect transient state such as *read* or *flagged*. The impact is limited and often invisible.

Contacts are typically edited by a single user, so true conflicts are relatively rare in practice. That makes them a useful **playground**: complex enough to exercise conflict logic, but constrained enough to test and reason about thoroughly.

Calendars are where these problems become unavoidable. Events are shared, modified by multiple participants, synchronized across devices, and often updated by external systems. Simultaneous changes are normal — and JMAP Calendars rely on the same `PatchObject` mechanism.

---

## Why the UI barely changed

This work is primarily about protocol correctness, not presentation.

On iOS, the existing UI already supported incremental updates and offline edits, so very little needed to change.

On Android, Contacts previously had no exposed UI. This release introduces a minimal but functional interface, focused on correctness rather than completeness. More UI work will build on this foundation later.

The absence of visible changes is intentional. UI polish only makes sense once the underlying synchronization behavior is reliable.

---

## Looking ahead: JMAP Calendars

JMAP Contacts are a stepping stone toward **JMAP Calendars**.

Many of the hard problems already appear here in a smaller form: patch-based updates, pending local intent, rebasing after server changes, and explicit conflict handling. Calendars build on the same ideas but add significantly more complexity around time zones, daylight saving transitions, recurrence rules, and exceptions.

A future post will explore why calendar synchronization is fundamentally harder — and why the design choices behind JMAP become even more important in that domain.

---

## Closing thoughts

This release is not about flashy features.

It is about building a solid, testable core that behaves predictably under real-world conditions — especially when multiple clients and servers are involved.

JMAP Contacts are a meaningful step in that direction. The UI may look familiar, but the foundation underneath is now stronger and ready for what comes next.

