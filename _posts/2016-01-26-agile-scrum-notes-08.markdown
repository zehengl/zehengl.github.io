---
layout: post
title:  "Agile Scrum Note 08: Estimation"
date:   2016-01-26
author: Zeheng Li
---

How to estimate efforts in Scrum projects.

# Principles behind Scrum estimation
  * Achieving "precision" in estimates is neither possible nor necessary – being "predictable" is good enough 
  * The team which is going to do the work has the final word about estimates – it does not matter what others think
  * Just like planning, estimation gets progressively closer to the actual as more and more information becomes available
  * Scrum accelerates feedback about estimates, i.e., bad estimation will be exposed faster

# Estimation techniques
  * Estimates are classified as Top-Down or Bottom-Up 
  * Top-Down
    + Expert estimation
    + Analogous estimation
    + Parametric estimation
  * Bottom-up or Detailed estimation

# Types of estimates
  * Order of Magnitude
    + -25% to +75%
    + These are used for Go/No-Go decisions
  * Budgetary
    + -10% to +25%
    + Used for allocation of budgets
  * Definitive
    + -5% to +10%
  * Remember there is always a "range of values" to estimates – be sure to understand this and factor in while planning

# Uncertainty in estimates
![TheConeOfUncertainty](https://dl.dropboxusercontent.com/u/2746648/github/zehengl/TheConeOfUncertainty.gif)

[Credits: http://blog.karmona.com/index.php/2010/04/18/the-cone-of-uncertainty-in-pastel/](http://blog.karmona.com/index.php/2010/04/18/the-cone-of-uncertainty-in-pastel/)

# Over-estimation and under-estimation
  * Underestimation is typically underestimated (i.e., overestimation is overestimated)
    + Managers always feel the urge to deal with overestimation, but feel no need to deal with underestimation
    + But underestimation is more prevalent and perhaps more dangerous
  * Nothing is impossible for the man who doesn’t have to do it himself (A.H. Weiler)
  * It always takes longer than you expect, even if you take into account Hofstadter’s law

# What contributes to size
  * Size or "bigness" of work is governed by: 
    + How complex is it
    + How risky it is?
    + How much of it is there?

Raw size can be "adjusted" as follows:

{% highlight bash %}
Adjusted estimate = 
  Raw estimate * ( 1 + Complexity Factor + 
    Drag (unfamiliarity of the team) +
    Working environment (lack of co-location and good work conditions) + 
    Multiple teams (Overhead caused by working on multiple teams) )
{% endhighlight %}

# Measures of size
  * Sequential
    + Lines of code
    + Function points
  * Agile
    + Story points
    + Ideal days

# Ideal days
  * How many days would it take under "ideal" circumstances
    + Considers only actual "work" time – no distractions     
    + Examples of distractions
      - Email
      - Personal work (e.g. reading Facebook updates)
      - Meetings not connected to actual work 
      - Breaks for tea, coffee, lunch, etc.

# Converting ideal days to actual days
  * Converting ideal to actual days needs to take into account the following
    + How much distraction needs to be considered? 
    + Does the resource have other tasks?
    + Who is actually doing the work (expert or novice)?
  * Example: What are the "ideal days" for this story
    + A report for a banking application is taking too long (up to an hour). We need to profile the process, discover the bottlenecks and tune the process to improve it to not more than 30 seconds.
  * Now what are the "actual" days?


# Story points
  * Story points uses "analogous" estimation techniques 
  * Establish a small story as a benchmark and assign it one story point
  * Then assign story points to other stories relative to the benchmark
    + If it is twice as big, give it 2 story points, if it is thrice as big, give it 3 story points and so on
  * Relative value is what matters, absolute number is not important
  * Points are assigned for the entire effort (including design, code, test, etc.)

# Story points example
  * What is the size of this story as compared with the previous story?
    + Previous story: A report for a banking application is taking too long (up to an hour). We need to profile the process, discover the bottlenecks and tune the process to improve it to not more than 30 seconds.
    + New story: The day-end processing for a trading application takes over 30 minutes. This needs to come down to no more than a minute. Processing includes processing and completing 20 reports.
  * If the previous story had a story point of 3, what is the story point for the new story?
  * If the previous story took 5 Person days to complete, how much time will the new story take?


# Using story points
  * Do not use a single gold standard: Triangulate instead
    + Choose a small story – assign it 1 story point 
    + Choose a medium story – assign it 5 story points 
    + Choose a large story – assign it 13 story points 
    + Now where does a story stand in comparison to the three?
  * Story points are usually assigned in a non-linear scale
    + Doubling scale: 1, 2, 4, 8, 16, 32, ...
    + Modified Fibonacci series: 1, 2, 3, 5, 8, 13, 20, ...

# Comparing the approaches
  * Story points help drive cross-functional behavior
  * Story point estimates do not decay
  * Story points are a pure measure of size
  * Estimating in story points is typically faster
  * My ideal days cannot be added to your ideal days
  * Ideal days are easier to explain outside the team
  * Ideal days are easier to estimate at first
  * Ideal days can force companies to confront time wasting activities

# Estimation techniques – Planning poker
  * An iterative approach to estimating 
  * Steps
    - Each estimator is given a deck of cards, each card has a valid estimate written on it
    - Customer/Product owner reads a story and it’s discussed briefly
    - Each estimator selects a card that’s his or her estimate
    - Cards are turned over so all can see them
    - Discuss differences (especially outliers)
    - Re-estimate until estimates converge
  * Planning poker tips
    - What if the discussion lingers too long?
      + Scrum Master should limit the discussion focused on topic
      + Keep a timer to "time-box" the discussion
    - What if the estimates never converge?
      + Ask the team if they want to go with the majority view
      + If you know who is actually going to do the work, go with that person’s view
      + Be patient and let the team agree on the terms of the agreement – do **NOT** force your views
  * Advantages of planning poker
    - It gets the whole team involved
      + Team involvement generates "buy-in" and ensures commitment
      + Everybody gets exposure to all the stories
      + Everybody’s experience comes into play
    - It triggers a lot of very useful discussion
      + About clarifying the requirement
      + About the technical approach and design
      + About possible challenges and risks
      + About the estimate itself

# Affinity estimation

Affinity Estimating is a technique many teams use to quickly and easily estimate (in Story Points) a large number of user stories.

  * Is Quick and Easy
  * Decision making process is visible
  * Creates a positive experience rather than confrontational one
 
# Affinity estimation - process

[Credits: http://www.gettingagile.com/2008/07/04/affinity-estimating-a-how-to/](http://www.gettingagile.com/2008/07/04/affinity-estimating-a-how-to/)

---

  * Select the set of stories and write one story on a post-it note or a card
  * Ask the team members to rank the stories from smallest to largest
  * It may require discussion and few iterations to get the team to agree on the order

![relativesizingwall-empty-spectrum](https://dl.dropboxusercontent.com/u/2746648/github/zehengl/relativesizingwall-empty-spectrum.png)

---

  * Now give the team a few "buckets" in which to place the stories. It could be T-shirt sizes (XS, S, M, L and XL) or story points (1, 2, 5, 8, 13)
  * A story can only be in one bucket
  * Collect the information and summarize

![relativesizeditems-inbuckets](https://dl.dropboxusercontent.com/u/2746648/github/zehengl/relativesizeditems-inbuckets.png)

---
