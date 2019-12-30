+++
title = "安全"
id = "security"
+++

- [扫描并提交CVE问题](#itm1)
- [安全团队分发CVE问题](#itm2)
- [处理CVE问题](#itm3)
- [CVE问题合入策略](#itm4)
- [CVE问题流程说明](#itm5)



<h2 id="itm1">扫描和提交CVE问题</h2>
openEuler的安全系统会扫描属于openEuler软件包范围内的CVE问题，并向openEuler社区的安全团队提交CVE问题。CVE类的问题的issue标题必须以CVE ID起始，后面跟上CVE问题的简要描述，如：

**CVE-2019-11255:** CSI volume snapshot, cloning and resizing features can result in unauthorized volume data access or mutation 



<h2 id="itm2">安全团队处理和分发CVE问题</h2>

安全团队会根据CVE问题所属的包分发对应的CVE ISSUE到repo内。CVE ISSUE会包含以下信息：

+ 漏洞的详细描述（以下信息由CVE扫描工具提供）

  + [CVEID] : 必须包含对应的CVE链接

  + [PRODUCT]：CVE提供的信息，包含供应商，开发人员或项目名称，以及存在漏洞的实际软    	件或硬件的名称

  + [ VERSION ]：包括版本，发行日期或供应商，开发人员或项目用来区分发行版本的任何差异信息。也可以用特定的版本号，版本范围或“版本号或日期之前/之后的所有版本”来描述。

  + [ PROBLEMTYPE ]：

  + [ REFERENCES ]：相关URL链接和参考说明

  + [ DESCRIPTION ]：漏洞的详细描述说明，包括：使用该漏洞的攻击类型的说明；漏洞的影		响；受漏洞影响的软件产品中的软件组件；可以利用此漏洞的任何攻击媒介

  + [ ASSIGNINGCNA ]：分配CNA的名称



<h2 id="itm3">处理CVE问题</h2>

Maintainer会对CVE问题进行确认和分发。CVE问题的解决方案可以由贡献者提供，并经过Maintainer或Committer的评审提交。提交时请关联CVE ISSUE，并在ISSUE内提供完善的的信息：

- 是漏洞吗？（ **Am I vulnerable?** ）：
  + 描述问题发生需要的场景（包括软硬件和交互场景等）
  + 问题所造成的影响和影响的范围
  + 如何确认使用的版本是否包含该问题

+ 如何缓解漏洞造成的影响( **How do I mitigate the vulnerability?** )
  + 短期缓解方案
  + 长期缓解方案：比如patch的安装地址、安装方式等。
  
+ 对该漏洞的评分
  
  <table board="2" class="table table-bordered table-striped">
      <caption><b>CVSS打分表</b></caption>
      <thead>
          <tr>
              <th align="left" style="width:40px">打分项</th>
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
  
+ 漏洞的详细描述（以下信息由CVE扫描工具提供）

  + [CVEID] : 必须包含对应的CVE链接
+ [PRODUCT]：CVE提供的信息，包含供应商，开发人员或项目名称，以及存在漏洞的实际软件或硬件的名称
  
  + [ VERSION ]：包括版本，发行日期或供应商，开发人员或项目用来区分发行版本的任何差异信息。也可以用特定的版本号，版本范围或“版本号或日期之前/之后的所有版本”来描述。
+ [ PROBLEMTYPE ]：
  
  + [ REFERENCES ]：相关URL链接和参考说明
+ [ DESCRIPTION ]：漏洞的详细描述说明，包括：使用该漏洞的攻击类型的说明；漏洞的影响；受漏洞影响的软件产品中的软件组件；可以利用此漏洞的任何攻击媒介
  
  + [ ASSIGNINGCNA ]：分配CNA的名称
  
    

<h2 id="itm4">CVE问题合入策略</h2>

+ **快速通道**：对openEuler评定级别是严重的安全类问题，openEuler安全团队会启动快速通道，优先向涉及到且在生命周期内的LTS版本提供解决方案。

  

+ **普通合入**：对重要及以下影响的安全类问题，根据问题的严重程度和影响范围可以选择以下几种策略：

  + 正式版本存在的安全类问题，可视问题影响选择：

    + 策略一：补丁向所有涉及到且在生命周期内的LTS&社区版本发布
    + 策略二：补丁向当前最新的LTS版本&社区版本发布
    + 策略三：补丁合入当前开发的LTS版本&社区版本（此类问题不会发布安全公告）

  + 未流入正式版本的安全类问题：作为开发版本的ISSUE处理，合入到当前开发版本，此类问题也不需要发布安全公告；

<h2 id="itm5">CVE问题流程说明</h2>


<h2 id="itm5">CVE问题处理流程</h2>

<img src="./security/procedure.png" width="100%" style="max-width:1079px" />
