# 🔐 **view-once-API** - ![secure-your-private-data](https://img.shields.io/badge/View%20Once-Secure%20Always-blue.svg) 

## **Introduction**

This is an experimental API that allows users to store temporal messages to be viewed once and then be discarded.

We encrypt the message on arrival and store it, and as a response you get an unique **KEY** 🔑.

You can then use that **KEY** to, for example, share an unique link that contains the **KEY**.

On generating the request to view the messaged attached to the unique **KEY**, the API will respond with the message and delete the original message, making it impossible to access it a second time.

🔐 DATA is not read, checked or saved in any way. 
