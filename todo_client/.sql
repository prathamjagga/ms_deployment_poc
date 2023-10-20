select count(*) from JavaScriptError facet errorClass

from JavaScriptError select (count(errorMessage)/(SELECT count(*) from JavaScriptError))*100 as 'Percentage errors' facet pageUrl 

from PageView select count(countryCode) facet countryCode limit 5 

from JavaScriptError SELECT session, countryCode, regionCode where session in (select (uniques(session)) from PageView) limit max

from Span select uniqueCount(userId) facet country.code

