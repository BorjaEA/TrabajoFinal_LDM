<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link href="style.css" type="text/css" rel="stylesheet"/>
			</head>
			<body>
				<h1>Cancion: <xsl:value-of select="cancion/titulo"></xsl:value-of></h1>
				<span>Autor: <xsl:value-of select="cancion/autor"></xsl:value-of></span>
				<br/>
				
				<xsl:for-each select="cancion/letra/estrofa">
					<div>
						<xsl:for-each select="verso"><p><xsl:value-of select="."></xsl:value-of></p>	</xsl:for-each>
					</div>
					<br/>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>