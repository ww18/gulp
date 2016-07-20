
    <section class="column-desc" style="background-image: url(<%=columnTopData.image%>);">
        <header><%=columnTopData.name%></header>
        <%if(columnTopData.description && columnTopData.description.length > 56){%>
        <%
        var summary = columnTopData.description.substring(0,56) + '...';
        %>
        <pre><%=summary%></pre>
        <%} else {%>
        <pre><%=columnTopData.description%></pre>
        <%}%>

    </section>

