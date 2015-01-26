# Single User Wikipedia

Need a cool radical name.

## The Idea
Have a wikipedia for personal use that can requires authentication and protects
data, but at the same time can be shared with guests when needed.

### Goals and Requirements


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
