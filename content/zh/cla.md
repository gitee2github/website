+++
title = "签署社区CLA"
+++

在提交任何贡献前，你必须同意本协议规定的所有条款并签署本协议，
并将签署后的协议上传到openEuler官网指定地点。
按照如下指示签署本协议后，表明你接受本协议并同意受其约束。
你在本协议下授予的权利从你首次向openEuler提交代码之日起生效，
即使你的代码贡献行为发生在本协议签署前。

1. 你同意接受openEuler 知识产权政策的法律约束。该政策公布在openEuler官方网站上。
2. 你承诺：
    * 你的每次贡献都是你原创的你有根据本协议授权的法律权利；
    * 尽你所知，每次贡献均不侵犯第三方的版权，商标，专利或其他知识产权。
3. 本贡献协议适用中华人民共和国法律并由深圳市龙岗区人民法院管辖。
4. 请选择一个可适用的陈述并填空。注意：不要同时选两个：

<table id="cla-type-table">
    <tr>
        <td>
            <input type="radio" name="cla-type-radio" value="0" checked />个人独立贡献者
        </td>
        <td>
            <input type="radio" name="cla-type-radio" value="1" />法律实体贡献者
        </td>
    </tr>
</table>

<table id="individual-table">
    <tr>
        <td colspan="2">
            我是一个个人，没有其他人或实体，包括我的雇员，有或者将有对我贡献的权利。
        </td>
    </tr>
    <tr>
        <td>
            姓名*:
        </td>
        <td>
            <input type="text" name="individual-name" required = "required" />
        </td>
    </tr>
    <tr>
        <td>
            地址*:
        </td>
        <td>
            <input type="text" id="individual-address" required = "required" />
        </td>
    </tr>
    <tr>
        <td>
            日期*:
        </td>
        <td>
            <input type="text" id="individual-date" required = "required" />
        </td>
    </tr>
    <tr>
        <td>
            邮箱*:
        </td>
        <td>
            <input type="text" id="individual-email" required = "required" />
        </td>
    </tr>
    <tr>
        <td>
            电话*:
        </td>
        <td>
            <input type="text" id="individual-telephone" required = "required" />
        </td>
    </tr>
    <tr>
        <td>
            传真:
        </td>
        <td>
            <input type="text" id="individual-Fax" />
        </td>
    </tr>
</table>

<table id="legalentity-table">
    <tr>
        <td colspan="2">
            我是一个法律实体，如下签字的个人是我授权并代表我的。
        </td>
    </tr>
    <tr>
        <td>
            授权代表*:
        </td>
        <td>
            <input type="text" name="legalentity-name" required = "required" />
        </td>
    </tr>
    <tr>
        <td>
            职位*:
        </td>
        <td>
            <input type="text" id="individual-title" required = "required" />
        </td>
    </tr>
    <tr>
        <td>
            公司名*:
        </td>
        <td>
            <input type="text" id="individual-corporation" required = "required" />
        </td>
    </tr>
    <tr>
        <td>
            地址*:
        </td>
        <td>
            <input type="text" id="individual-address" required = "required" />
        </td>
    </tr>
    <tr>
        <td>
            日期*:
        </td>
        <td>
            <input type="text" id="individual-date" required = "required" />
        </td>
    </tr>
    <tr>
        <td>
            邮箱*:
        </td>
        <td>
            <input type="text" id="individual-email" />
        </td>
    </tr>
    <tr>
        <td>
            电话*:
        </td>
        <td>
            <input type="text" id="individual-telephone" />
        </td>
    </tr>
    <tr>
        <td>
            传真*:
        </td>
        <td>
            <input type="text" id="individual-Fax" />
        </td>
    </tr>
</table>

<table id="cla-table">
    <tr>
        <td>
            <input type="button" id="sign-cla-button" value="签署"/>
            <input type="button" id="reset-cla-button" value="重置"/>
        </td>
    </tr>
</table>