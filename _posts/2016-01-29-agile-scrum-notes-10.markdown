---
layout: post
title:  "Agile Scrum Note 10: Advanced Concepts"
date:   2016-01-29
author: Zeheng Li
icon: /assets/post/icon-jira.svg
---

Some advanced concepts in Scrum.

### Scrum on large projects
  * Split into smaller teams each delivering a logical portion
  * Logical portion is determined by being able to deliver tangible customer value on their own
  * Bad division:
    - Dev Team, QA Team, Regression Team, Automation Team
    - UI Team, Database Team, Server Team
  * Good division:
    - Platform Team, Content Team
    - Deposits Module, Advances Module
  * Each team is cross-functional and has its own backlog
  * Some stories/epics may run across teams
  * Dependencies across teams have to be handled carefully
  * Some “look-ahead planning” helps

### Scrum-of-Scrum
  * Useful in circumstances when multiple teams are working on the same system or systems with multiple integration points
  * It is essentially a meeting where representatives (1 or 2) from each Scrum team attends
    - Product Owner, Scrum Master/Architect
  * The focus of this meeting is on inter-dependencies and coordination
  * This meeting need not be daily – the frequency should be governed by the level of interaction required

### Product coordination teams
  * Assign few members whose job is to coordinate across multiple teams
  * What to coordinate?
    - High priority stories or epics that go across multiple teams
    - Sort out technical issues; interface definitions
    - Ensure consistency and uniformity of design
    - Bubbling up any issues with regard to dependencies
  * Coordination may either be a full-time or part-time role depending upon how tight the dependencies are
  * Sometimes works better than Scrum-of-Scrums because responsibility is assigned

### Scrum on maintenance projects
  * Two questions:
    - Can you define a clear, prioritized backlog of enhancement requests?
    - Can you estimate the time required for the requests with reasonable certainty?
  * If the answer is YES, you can apply Scrum to such a project
    - Provide larger buffer for ad-hoc requests that are inevitable
    - Alternately, establish a “resolution” or “sustaining” team to shield the team working on new features

### Distributed scrum teams
  * No doubt running a distributed Scrum team is challenging:
    - Scrum emphasizes face-to-face communication, cross- functional teams and close collaboration
    - Scrum rituals like daily stand-ups, sprint planning, review and retrospective become more challenging
  * However:
    - Distributed Scrum is still better than distributed waterfall
    - It is still possible to implement Scrum with distributed teams – with some best practices to help

### Best practices in distributed scrum
  * If you had a distributed team with time zones nearly 12 hours away, what would you prefer?
    - Teams working away on huge requirements documents and come back with something after 6 months? OR
    - Frequent check points - preferably something tangible to see every week?
  * Three important things to keep in mind:
    - Apply/Tailor Scrum practices effectively
    - Follow good software engineering practices
    - Work on the people-to-people equations

### Scenario-1: Team in India; PO in US
  * PO is remote and all or most of the team is in India
  * Suggested Approach
    - Co-locate the Scrum Master with the team
    - All meetings with PO are visual (webex/web cams)
    - Mailing list with PO and entire team to be kept in cc. for all project related emails
    - One hour overlap between PO and team daily
    - High travel budget to have face time between PO and team
    - Sprint planning split up into Pre-planning, offline analysis and finalization
    - Review and retrospectives on Webex

### Scenario-2: Team split in two locations
  * Say, 1 Dev and 3 Testers in India; 3 Dev and 1 Tester in US
  * Suggested Approach
    - 2 Scrum Masters (one in each location)
      + Scrum Masters may have lighter workload than a regular Scrum Master
    - 2 daily stand-up meetings with notes from each meeting read out at start of the other meeting
    - Pay lot of attention to team dynamics
    - Pick and choose recommendations made for Scenario-1

### People practices in distributed Scrum
  * Developing good relations between people is absolutely critical – more so in a distributed team
  * So you need to invest in developing the relations and ensuring good communication channels
  * Disagreement is OK; Perceiving the other as evil is dangerous
  * Allow for higher travel budget – face time is irreplaceable
    - Co-locate key members for critical periods
    - Rotate team members periodically across locations
  * Cultural exchanges – Team wikis

### Practices in distributed scrum
  * Leverage technology:
    - Goodweb-conferencingtools
    - Good speaker phone to make tele-conferencing easier
    - Switch on web-cameras/use video conferences
    - Instantmessaging
  * Be sensitive about timing of interaction
    - Working hours
    - Vacation times

### Scrum-Contracting
  * Does the customer need to know about Scrum?
    - How to “sell” the methodology to the customer
    - How to tailor contracts to the methodology
  * Ask the customer if he would like the following:
    - A demo of working system every few weeks
    - Opportunity to make changes to requirements as long as the team has not started working on them
  * But also tell them that:
    - They need to be available to the team for answering questions
    - The team must be allowed to self-manage
    - They cannot expect instant gratification on change requests

### Scrum in fixed price projects
  * Challenge: Scrum advocates being “responsive” to customer – but how does it work when the Price and Scope is “fixed”?
  * In the event of a change, you could:
    - Add Sprints to the project (additional cost)
    - Trade one feature for another
    - So long as you haven’t started working on the feature, it should be possible to do so
  * So change management would still work
    - But you get much more flexibility in absorbing changes

### Transitioning a team/project to Scrum
  * Ken Schwaber (co-founder of Scrum)
  - If waterfall is working for you, do not follow Scrum
  - 75% of the teams that use Scrum are not getting full value from it
  * Having said that:
  - The successful implementation of Scrum will have a profound transformation
  - Start on the journey anticipating resistance, but also start only if you are convinced about the benefits

### Steps for Transitioning a team/project to Scrum
  * Step-1: Start with one or few teams that are willing to try it out
    - Do not start if customer AND/OR senior management is not willing
    - Skepticism is fine (even welcome), but resistance to change or closed mind is dangerous
    - Find a champion or evangelist who is influential
  * Step-2: Understand what you are trying to achieve and find a way to measure it
    - Sell the benefits, but do not over-sell it
    - Fore-warn people that it is hard
  * Step-3: Call it a pilot for as long as possible
    - This will make the initial chaos and mess easier to accept
  * Step-4: Be prepared to help:
    - Education for team members is important
    - Assign a coach/mentor; do not assume they will solve all problems on their own
    - Spend a lot more time with people who hate Scrum - find a way to involve them in the change
    - Achieve initial successes and over-communicate about it
  * Step-5: Understand some teams and people will NOT like it
    - Do not force them or get drawn into a battle
    - Ask if it is at least “better than before”?
    - Make it safe for people to change their mind or withdraw
