<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version ="1.0">
<xsl:output method="html"/>
<xsl:template match="/Book">
<body>
    <h1 align="center">
        <xsl:value-of select = "ISBN"/>
        <xsl:text>,</xsl:text>
        <xsl:value-of select="Title"/>
    </h1>
    <h2 align="center">
        <table border="1">
            <tr>
                <td align="right">
                    <xsl:text>Preface</xsl:text>
                    <xsl:value-of select="Chapters/Preface/Numbers"/>
                </td>
                <td>
                    <xsl:value-of select="Chapters/Preface/Name"/>
                    <xsl:text> ( </xsl:text>
                    <xsl:value-of select="Chapters/Preface/Pages"/>
                    <xsl:text> page) </xsl:text>
                </td>
            </tr>
            <xsl:for-each select="Chapters/Chapter">
                <xsl:sort select="Numbers" order="ascending"/>
                <tr>
                    <td align="right">
                        <xsl:text>Chapter </xsl:text>
                        <xsl:value-of select="Numbers"/>
                    </td>
                    <td>
                        <xsl:value-of select="Name"/>
                        <xsl:text> ( </xsl:text>
                        <xsl:value-of select="Pages"/>
                        <xsl:text> pages) </xsl:text>
                    </td>
                </tr>
            </xsl:for-each>
        </table>
    </h2>
</body>