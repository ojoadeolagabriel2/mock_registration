package service.filter;

import org.springframework.context.annotation.Configuration;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Configuration
public class XSSFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        CustomHttpServletRequestWrapper wrapper = new CustomHttpServletRequestWrapper((HttpServletRequest) servletRequest);
        String newBody = wrapper
                .getBody()
                .replace(" ", "");
        wrapper.setBody(newBody);

        filterChain.doFilter(wrapper, servletResponse);
    }
}
