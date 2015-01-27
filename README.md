# Single User Wikipedia

Need a cool radical name.

## The Idea
Have a wikipedia for personal use that can requires authentication and protects
data, but at the same time can be shared with guests when needed.

### Goals and Requirements
This wiki is for me. But it also for others to use as reference. I am the only
one who edits the wiki. No one else can edit it. Other people can comment though.
The idea is that this is my mind palace, I am too lazy otherwise -- therefore it
needs to:

  1. Be accessible from any device
  2. Be quick and easy to navigate and find the data I want
  3. Be quick and easy to add new information
  4. Be quick and easy to edit old information
  5. Be mindful of redundancy and reduce duplicate information
  6. Allow others to comment and review the information
  7. Allow others to view information flagged as public
  8. Allow specific individuals access to specific information
  9. Be able to create a quick tutorial from other bits of information

### General Design
The normal flow is layed out below. At the end of the readme.
 1. A user will login.
 2. A user will search for what they want
 3. They will hit enter, or use the keyboard to navigate down and select
 4. The user will then navigate like OSX finder column view

Features of design:
 - Keyboard control for everything allowing power usage
 - The ability to reference headings in other articles
   - A breadcrumb trail 
 - The ability to share a single article to a friend with authentication
 - The ability to make certain articles public
 - The ability to have accounts for users who can just read certain articles
 - The ability to have accounts for users who can comment, or even write
 - A column that shows the headers (not shown in diagram) in column view

### Components
The following components make up the service:
 1. Something that creates the category hierarchy
 2. Something that renders the markup language to HTML/CSS
 3. Something that manages authentication and permissions
    1. Something that manages what is public and what is private
 4. Something that manages search
 5. Something that tracks commenting and allows commenting
 6. Something that organises views

```
+--------------------------------------||--------------------------------------+
|                                                                              |
|                     Welcome to <owner name>'s wikipedia!                     |
|                                                                              |
|                                                                              |
|                     +----------------------------------+                     |
|                     | username                         |                     |
|                     +----------------------------------+                     |
|                                                                              |
|                     +----------------------------------+                     |
|                     | password                         |                     |
|                     +----------------------------------+                     |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
+--------------------------------------||--------------------------------------+

+--------------------------------------||--------------------------------------+
|                                                                              |
|                     +----------------------------------+                     |
|                     | search                           |                     |
|                     +----------------------------------+                     |
|                                                                              |
|                     Arch Setup                       |;|                     |
|                     Bash                             | |                     |
|                     C/C++                            | |                     |
|                     Cooking                          | |                     |
|                     Homemade                         | |                     |
|                     Performance                      | |                     |
|                     Python                           | |                     |
|                     Server Setup                     | |                     |
|                     SSH                              |^|                     |
|                     Web Development                  |v|                     |
|                                                                              |
|                                                                              |
|                                                                              |
+--------------------------------------||--------------------------------------+

+--------------------------------------||--------------------------------------+
|                                                                              |
|                     +----------------------------------+                     |
|                     | P                                |                     |
|                     +----------------------------------+                     |
|                                                                              |
|                     Performance                                              |
|                     Python                                                   |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
|                                                                              |
+--------------------------------------||--------------------------------------+

+--------------------------------------||--------------------------------------+
| Arch Setup      | Networking                                                 |
| Bash            | CPU                                                        |
| C/C++           | Disk IO                                                    |
| Cooking         | Memory                                                     |
| Homemade        |                                                            |
|-----------------+                                                            |
| Performance                                                                  |
|-----------------+                                                            |
| Python          |                                                            |
| Server Setup    |                                                            |
| SSH             |                                                            |
| Web Development |                                                            |
|                 |                                                            |
|                 |                                                            |
|                 |                                                            |
|                 |                                                            |
|                 |                                                            |
|                 |                                                            |
+--------------------------------------||--------------------------------------+

+--------------------------------------||--------------------------------------+
| Arch  | Networking | Dtrace           | Perf Oneliners                       |
| Bash  |------------| Dtrace Oneliners |                                      |
| C/C++ | CPU        | Perf             | perf -e ...                          |
| Cooki |------------|------------------+ perf -e ...                          |
| Homem | Disk IO    | Perf Oneliners     perf record                          |
|-------| Memory     |------------------+ perf report                          |
| Perfo | Program    |                  |                                      |
|-------|            |                  | Use this to do this... etc...        |
| Pytho |            |                  |                                      |
| Serve |            |                  |                                      |
| SSH   |            |                  |                                      |
| Web D |            |                  |                                      |
|       |            |                  |                                      |
|       |            |                  |                                      |
|       |            |                  |                                      |
|       |            |                  |                                      |
|       |            |                  |                                      |
|       |            |                  |                                      |
|       |            |                  |                                      |
|       |            |                  |                                      |
+--------------------------------------||--------------------------------------+
```
