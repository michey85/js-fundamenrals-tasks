const link = {
    href: '#',
    title: 'simple link',
    target: 'blank',
    className: 'link',
    id: null,
    children: {
        span: {
            content: 'Click me',
            className: 'anchor',
        },
    },
}

const {
    target,
    className,
    children: {
        span: {
            content,
            className: renamed,
        }
    },
} = link;