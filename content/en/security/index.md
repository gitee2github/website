+++
title = "Security"
id = "security"
+++

<h4 id="itm1">Submit a CVE Issue</h4>

openEuler's security system scans CVE issues and submits CVE issues to the security committee of openEuler community. The issue title of a CVE issue must start with a CVE ID, followed by a brief description of the CVE issue, for example,

**CVE-2019-11255:** CSI volume snapshot, cloning and resizing features can result in unauthorized volume data access or mutation 



<h4 id="itm2">Security Group Distributes CVE Issues</h4>

The security Group will distribute the CVE issues to the related repos. CVE issues contain the following information:

+ Detailed description of the vulnerability (the following information is provided by the CVE scanning tool)

    + [CVEID]: Including the corresponding CVE link

    + [PRODUCT]: Information provided by CVE, including the vendor, developer, or project, and the name of the actual software or hardware that has the vulnerability

    + [VERSION]: Including version, release date, or any discrepancies used by vendors, developers, or projects to distinguish release versions. It can also be described with a specific version number, version range, or "all versions before / after version number or date".

    + [PROBLEMTYPE]:

    + [REFERENCES]: related URL and reference descriptions

    + [DESCRIPTION]: Detailed description of the vulnerability, including description of the type of attack using the vulnerability; impact of the vulnerability; software components in the software product affected by the vulnerability,  any attack vector that can exploit this vulnerability

    + [ASSIGNINGCNA]: assign the name of CNA


<h4 id="itm3">Handle CVE Issues</h4>

Maintainer identifies and distributes CVE issues. Solutions to CVE problems can be provided by contributors and submitted for review by the Maintainer or Committer. When submitting, please associate with CVE ISSUE and provide complete information in Issues:

- Is it a loophole? (**Am I vulnerable?**):
    + Describe the scenarios of the problem (including software and hardware and interaction scenarios)
    + Impact and scope of impact
    + How to confirm whether the version used contains the issue

+ How to mitigate the impact of the vulnerability (**How do I mitigate the vulnerability?**)
    + Short-term mitigation plan
    + Long-term mitigation plan: such as patch installation address, installation method, etc.
  
+ Rating for this vulnerability
  
  <table board="2" class="table table-bordered table-striped">
      <caption><b>CVSS Scoring Sheet</b></caption>
      <thead>
          <tr>
              <th align="left" style="width:40px">Scoring Item</th>
              <th align="left" style="width:40px">openEuler</th>
              <th align="left" style="width:40px">NVD</th>
          </tr>
          <tr>
              <td align="left">CVSS v3 Base Score</td>
              <td>7.3</td>
              <td>7.8</td>
          </tr>
          <tr>
              <td align="left">Attack Vector</td>
              <td>Network</td>
              <td>Local</td>
          </tr>
           <tr>
              <td align="left">Attack complexity</td>
              <td>Low</td>
              <td>7.8</td>
          </tr>
          <tr>
              <td align="left">Privileges Required</td>
              <td>None</td>
              <td>7.8</td>
          </tr>
          <tr>
              <td align="left">User Interaction</td>
              <td>Low</td>
              <td>Required</td>
          </tr>
          <tr>
              <td align="left">Scope</td>
              <td>Unchanged</td>
              <td>Unchanged</td>
          </tr>
          <tr>
              <td align="left">Confidentiality</td>
              <td>Low</td>
              <td>High</td>
          </tr>
          <tr>
              <td align="left">Integrity Impact</td>
              <td>Low</td>
              <td>High</td>
          </tr>
          <tr>
              <td align="left">Availability Impact</td>
              <td>Low</td>
              <td>High</td>
          </tr>
      </thead>
      <tbody>
      </tbody>
  </table>

  
+ Detailed description of the vulnerability (the following information is provided by the CVE scanning tool)

    + [CVEID]: Must include the corresponding CVE link
+ [PRODUCT]: Information provided by CVE, including the name of the vendor, developer, or project, and the name of the actual software or hardware that has the vulnerability
  
    + [VERSION]: Includes version, release date, or any discrepancies used by vendors, developers, or projects to distinguish release versions. It can also be described with a specific version number, version range, or "all versions before / after version number or date".

+ [PROBLEMTYPE]:
    + [REFERENCES]: related URL links and reference descriptions

+ [DESCRIPTION]: Detailed description of the vulnerability, including: description of the type of attack using the vulnerability; impact of the vulnerability; software components in the software product affected by the vulnerability; any attack vector that can exploit this vulnerability
  
    + [ASSIGNINGCNA]: assign the name of CNA    


<h4 id="itm4">CVE Issues Management Policy</h4>

+ **Fast Way**: The openEuler rating is a serious security issue. The openEuler security team will start the fast track to provide solutions to the LTS versions involved and within the life cycle.

  

+ **Common Integration**: For security issues that are important and affect the following, you can choose the following strategies based on the severity and scope of the problem:

    + There are security problems in the official version. Depending on the problem, the selection will be affected:

        + Strategy 1: Patches are released to all LTS & community versions involved and within the life cycle
        + Strategy 2: The patch is released to the latest LTS version & community version
        + Strategy 3: Patches are incorporated into the currently developed LTS version & community version (such issues will not issue a security bulletin)

    + Security issues that have not flown into the official version: handled as a development version of ISSUE and incorporated into the current development version. Such issues do not require a security announcement;

<h4 id="itm5">CVE Issues Proceure</h4>

<img src="./security/procedure.png" width="100%" style="max-width:1079px" />
