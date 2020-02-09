import { Quill } from 'react-quill';

let Inline = Quill.import('blots/inline');
let Block = Quill.import('blots/block');

class BoldBlot extends Inline {}
BoldBlot.blotName = 'bold';
BoldBlot.tagName = 'strong';

class ItalicBlot extends Inline {}
ItalicBlot.blotName = 'italic';
ItalicBlot.tagName = 'em';

class LinkBlot extends Inline {
  static create(url) {
    console.log(['called', 'create', url]);
    let node = super.create();
    node.setAttribute('href', url);
    node.setAttribute('target', '_blank');
    return node;
  }

  static formats(node) {
    console.log(['called', 'formats']);
    return node.getAttribute('href');
  }
}
LinkBlot.blotName = 'link';
LinkBlot.tagName = 'a';

class BlockquoteBlot extends Block {}
BlockquoteBlot.blotName = 'blockquote';
BlockquoteBlot.tagName = 'blockquote';

class HeaderBlot extends Block {}
HeaderBlot.blotName = 'header';
HeaderBlot.tagName = ['h1', 'h2'];

export { BoldBlot, ItalicBlot, LinkBlot, BlockquoteBlot, HeaderBlot };
