---
layout: post
title: Tactical Privacy
author: William Blankenship
socialImage: /media/cell-phone-in-hand.png
---

# They're Watching Us

In 2013, an NSA contractor leaked an internal review of project [Stellar Wind](https://en.wikipedia.org/wiki/Stellar_Wind), also known as the President's Surveillance Program (PSP). This project, and its successors, have been the focus of at least two public hearings from the Senate Intelligence Committee - in [2013](https://www.intelligence.senate.gov/hearings/open-hearing-fisa-legislation) and [2017](https://www.intelligence.senate.gov/hearings/open-hearing-fisa-legislation-0). Write-ups of these leaks, and the Senate hearings covering them, have given us a rare inside look into how the government conducts warrantless domestic surveillance. There are many articles covering general privacy and security. This article is focused on protecting you from what we know of warrantless domestic surveillance. <!--more--> If you want some background information on how we believe the government's mass surveillance program works, and why we recommend what we recommend, read on. Otherwise [click here](#summary) to jump straight to our recommendations.

Distinguishing between a government official without a warrant and one with a warrant is important, as we believe the two have different levels of access to your personal data. When documents for the PSP were thrust into the light of day in 2013, we learned something valuable as citizens: our government was _trying_ to follow the law. Granted [courts have ruled](https://www.aaup.org/brief/aclu-v-nsa-493-f3d-644-6th-cir-2007) the program was illegal, the vice president's lawyer drafted an interpretation of the law arguing the program was legal. It appears the NSA invested great effort in trying to stay within that interpretation of the law. In other words, the government might _really_ stretch the law when it comes to surveillance but they still try to follow it.


# Stretching The Law

So they are watching us without a warrant. How is that legal?

The first Senate Intelligence Committee hearing showed us part of the legal theory they were using to justify the program: [Smith vs. Maryland 442 U.S. 735 (1979)](https://en.wikipedia.org/wiki/Smith_v._Maryland). Michael Lee Smith had robbed someone and was repeatedly threatening them over the phone. The police, having identified Smith as a suspect, installed a "bug" at the phone company which would record the phone numbers Smith dialed catching him making the threatening call. They did not get a warrant to do this.

Smith's lawyers argued this constituted a warrantless search. They took it all the way to the Supreme Court. The verdict? Smith didn't have a reasonable expectation of privacy when he dialed the phone number. The phone number was being shared with the phone company who is known to record the numbers customers dial for billing purposes.

To justify mass surveillance, the government argued that "metadata" (more on this term later) has no reasonable expectation of privacy. If Smith vs. Maryland applies to any one person then it applies to everyone all at once. If you can record the phone number a single person dials then you can also record all of the phone numbers all of your citizens dial.


# Metadata

A central point in the government's mass surveillance program is distinguishing between "content" and "metadata". Content is the _actual_ communication, like Smith's voice in a phone call. Metadata is information _about_ a communication; the phone number Smith dialed. For example, when we send a letter in the mail, we could call everything inside the envelope "content"; the mailing address, return address, weight, date sent, date received, postage paid, who paid the postage, etc. could be called "metadata".

When you make a phone call, view a website, or send an email, you leave a trail of metadata about that communication. Your electronic devices frequently communicate on your behalf, without any interaction from you, leaving a trail of metadata. The government believes they have a right to record and search that metadata without needing a warrant.

The [EFF](https://ssd.eff.org/en/module/why-metadata-matters) is on point when describing the problem of not applying the 4th amendment to communication metadata:


> They know you called the suicide prevention hotline from the Golden Gate Bridge. But the topic of the call remains a secret.
>
> They know you got an email from an HIV testing service, then called your doctor, then visited an HIV support group website in the same hour. But they don't know what was in the email or what you talked about on the phone.
>
> They know you received an email from a digital rights activist group with the subject line "Let's Tell Congress: Stop SESTA/FOSTA" and then called your elected representative immediately after. But the content of those communications remains safe from government intrusion.

This is where it is critical to differentiate between warrantless surveillance and targeted surveillance with a warrant. If you believe the government has a warrant to search the content of your communication, then this blog post isn't going to help you. If your goal is to avoid passive warrantless searches, to keep your communication metadata from being stored in a government database, this blog post is going to walk you through the tools you can use and why we believe they work.

Let's take a look at some common stuff people do with tech, and the small changes you can make to prevent your data from ending up in the government's mass surveillance databases.

# Using The Internet

Most of our communication today happens over the public internet. Instead of phone calls and text messages, we use video chat and messenger apps. In addition to the metadata generated by the messages we send, the Internet's protocol generates a bunch of metadata as well: what servers your devices connect to, how much data you exchange, how frequently you visit, etc.

Much of this metadata centers around connecting to computers and involves something you may have heard of before: an IP address (short for internet-protocol). When you buy internet from your cable provider or cell phone carrier, they assign you an ip address for connecting to the internet - a random looking collection of numbers and dots that looks something like: 24.56.20.230. This IP address is like a mailing address. The government records this metadata in a database, keeping track of what IP address talked to what IP address, in the same way they may keep track of the sender/recipient of a letter sent via the mail.

This means that, from the moment we connect to the internet, the government can keep a record of everything we do. To avoid warrantless tracking, we recommend using a VPN. A VPN can obscure your IP Address by allowing your device to connect to the internet through their servers. This means the government will only be able to see that you connected to the VPN but won't be able to see what you did through that connection without advanced traffic analysis. While a VPN can protect you from surveillance, it's important to choose your VPN provider carefully since you'll be sharing all of your internet activity with them. We trust [Mullvad](https://mullvad.net) for this. Mullvad is the company providing the servers for [Mozilla's VPN](https://vpn.mozilla.org/) and has a [no-nonsense privacy policy](https://mullvad.net/en/help/no-logging-data-policy/).

Mullvad does some important things that make it the front-running pick for a VPN provider. First, they don't use user accounts. They generate a random account number for you. There is no way for Mullvad to tell who owns what account. You can put money and your account number in an envelope without a return address and send it to them. Of course, you can also pay with a credit card which will associate you with the account. Next, they keep no logs of connections and they only use the bare minimum amount of metadata necessary to route and authenticate requests. Finally, for advanced users, Mullvad supports "multi-hop" connections, meaning your communication is routed through multiple servers before reaching the internet.

We believe using a VPN provider like Mullvad will help keep your personal internet metadata out of government databases.

# Messaging

If you are wanting to communicate with one or more people, many people reach for text messaging, social media messengers, or email. Instead, we recommend [Signal](https://www.signal.org/).

Your email can be read by anyone with access to the network between you and the recipient, including all metadata about the communication. Text messages share all routing information (like phone numbers associated with a text) with the telecom provider. From what we know of government mass surveillance, the government is storing this metadata (email recipient, sender, timestamp, subject line, etc.) in a database. Similarly, they are storing text message metadata as well.

Signal, in contrast, takes great care to limit what data you share publicly when messaging folks. They've developed some state-of-the-art tech that allows for messages to be sent with very little metadata being generated. In fact, Signal uses a technique known as "sealed sender", meaning it's not possible to tell who is communicating with who on the Signal network. From what we know of government bulk metadata collection, your messages sent on the Signal network will be safe from the program.

# Web Browsing

When browsing the web, and interacting with this technology, you generate a _massive_ amount of metadata that the government can scoop up into a database.

We strongly recommend using [Firefox](https://www.mozilla.org/en-US/firefox/new/) which is run by a security focused non-profit. By default, Firefox ships with a feature called DNS over HTTPS. DNS, or domain name service, is what takes a web address like "evertwoyears.org" and translates it into one of those IP addresses we talked about before. When you type a web address into a browser, your computer generates a DNS request that the government can store. Firefox encrypts this traffic, and resolves it using [CloudFlare](https://1.1.1.1/), which we believe keeps it out of government databases.

Once you have Firefox Installed, we recommend installing [HTTPS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/), a plugin that forces websites to encrypt all traffic you send. HTTP is the language web browsers speak when they download websites. HTTP doesn't have any protections, so just like email, anybody who has access to the network between you and the website you are viewing can see everything you do. HTTPS on the other hand encrypts almost everything. This is important because, like email having a "subject" line, HTTP has "headers" which _could_ be considered metadata by the government. Headers can contain some pretty sensitive content. We believe that using HTTPS Everywhere will keep these headers out of government databases.

Finally, we recommend installing [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) and [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/). Many advertising networks rely on a process known as "[fingerprinting](https://panopticlick.eff.org/about#browser-fingerprinting) " to identify you and track what websites you visit. While these fingerprinting techniques are often derived from the content of a communication, which we believe would require a warrant for the government to view, it's not clear whether the government would consider the fingerprint report sent back to the advertiser as "metadata" once generated.

# Cellphone

We have some bad news. Questions asked during a 2013 Senate Hearing indicate the government considers a cellphone's location as "metadata". To understand how this happened, remember back to the beginning of this post when we said your devices communicate with no interaction from you? Your cellphone is frequently talking to nearby cellphone towers letting them know approximately where the phone is. This is necessary for your phone to work but, unfortunately, it seems the government believes they have a right U.S. citizens location data without a warrant. We don't have a good everyday solution for this. If you are doing something sensitive, like peacefully assembling at a rally or protest, we will share some tactics for protecting yourself in a future blog post. But these tactics aren't practical for everyday use. 

# Summary

A common myth is that the government is watching everything all the time. We don't believe they are. We believe that, without a warrant, there is only a limited amount of spying the government will conduct on U.S. citizens, and this spying is limited to metadata about a communication. To try and shield yourself from warrantless searches of your metadata, we recommend the following:

* Do **NOT** use email
* Do **NOT** use text messaging
* Do **NOT** use social media messengers
* Do use [Signal](https://www.signal.org/)
* Do use [Firefox](https://www.mozilla.org/en-US/firefox/new/)
* Install [HTTPS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/)
* Install [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
* Install [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/)
* Use [Mullvad](https://mullvad.net/en/)


# Disclaimer

This article is written as a best effort to protect the median non-technical user from the U.S. government's mass surveillance programs. What the public knows of these programs is likely incomplete, which means this list is likely not comprehensive. We are not lawyers and this blog post does not constitute legal advice.
